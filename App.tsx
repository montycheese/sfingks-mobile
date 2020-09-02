import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {
  ShareTechMono_400Regular, useFonts
} from '@expo-google-fonts/share-tech-mono'
import Wallet from "./models/Wallet";

export default function App() {
  let [fontsLoaded] = useFonts({
    ShareTechMono_400Regular,
  });


  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [isBalanceLoading, setIsBalanceLoading] = useState(true);
  const wallet = Wallet.getInstance();

  useEffect(() => {
    // TODO: Fetch balance from backend.
    setTimeout(() => {
      wallet.balance = 100;
      setIsBalanceLoading(false);
    }, 1000);
  }, [isBalanceLoading]);


  if (!isLoadingComplete || !fontsLoaded || isBalanceLoading) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
