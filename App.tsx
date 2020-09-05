import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Onboarding from 'react-native-onboarding-swiper';
import {getOnboardingPages} from "./utils/Utils";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // get from cache?
  const [userData, setUserData] = useState(null);
  const [userDataFetched, setUserDataFetched] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // TODO; replace wit get from cache
      setUserData(null);
      setUserDataFetched(true);
    }, 1000)
  }, []);


  if (!isLoadingComplete) {
    return null;
  } else if (userDataFetched && userData === null) {
    return (
        <SafeAreaProvider>
          <Onboarding pages={getOnboardingPages()}
                      titleStyles={{fontFamily: 'ShareTechMono_400Regular'}}
                      subTitleStyles={{fontFamily: 'ShareTechMono_400Regular'}}

          />
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
