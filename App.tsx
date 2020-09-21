import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import RegistrationScreen from "./screens/RegistrationScreen";
import Amplify from 'aws-amplify';

import config from './aws-exports';
import { Auth } from 'aws-amplify';
import API, {graphqlOperation} from "@aws-amplify/api";
import {getWalletBalance} from "./src/graphql/queries";
import Wallet from "./models/Wallet";

Amplify.configure(config);

const wallet = Wallet.getInstance();

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [userData, setUserData] = useState(null);
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {

    async function checkUserState() {

      let user = null;
      try {
        user = await Auth.currentAuthenticatedUser();
        console.debug(`Signed in as ${user.username} ${user.signInUserSession.accessToken.payload.sub}`);
        setUserData(user);
        setUserDataFetched(true);
      } catch (error) {
        console.debug('Failed to load authentication: ', error);
        setUserDataFetched(true);
        setUserData(null);
      }

      if (user !== null) {
        try {
          const graphqldata = await API.graphql(graphqlOperation(getWalletBalance, { id: user.signInUserSession.accessToken.payload.sub }));
          wallet.balance = graphqldata.data.getWalletBalance.balance;
        } catch (error) {
          console.warn('Failed to fetch balance, setting to 0', error);
          wallet.balance = 0;
        }
      }
    }
    checkUserState();

  }, []);


  if (!isLoadingComplete) {
    return null;
  } else if (userDataFetched && userData === null && !isOnboardingComplete) {
    return (
        <SafeAreaProvider>
            <RegistrationScreen onOnboardingComplete={() => setIsOnboardingComplete(true)} />
          <StatusBar />
        </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default App;
