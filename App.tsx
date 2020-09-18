import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import RegistrationScreen from "./screens/RegistrationScreen";
import Amplify from 'aws-amplify'

import config from './aws-exports'
import { Auth } from 'aws-amplify'

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // get from cache?
  const [userData, setUserData] = useState(null);
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {

    async function checkUserState() {

      try {
        const user = await Auth.currentAuthenticatedUser();
        // https://github.com/aws-amplify/amplify-js/issues/3640 reference later
        setUserData(user);
        setUserDataFetched(true);
      } catch (error) {
        console.debug(error);
        setUserDataFetched(true);
        setUserData({});//TODO remove
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
