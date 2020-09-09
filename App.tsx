import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // get from cache?
  const [userData, setUserData] = useState(null);
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // TODO; replace wit get from cache
      setUserData(null);
      setUserDataFetched(true);
    }, 1000)
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
