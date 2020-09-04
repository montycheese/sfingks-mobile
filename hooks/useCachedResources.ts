import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import {ShareTechMono_400Regular} from "@expo-google-fonts/share-tech-mono";
import Wallet from "../models/Wallet";

export default function u1seCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ShareTechMono_400Regular,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });

        const wallet = Wallet.getInstance();
        // TODO: replace with actual svc call.
        await new Promise((resolve, reject) => setTimeout(() => {
          wallet.balance = 100;
          resolve();
        }, 1000));


      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
