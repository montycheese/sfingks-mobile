import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import {  View } from '../components/Themed';
import {LinearGradient} from "expo-linear-gradient";
import {useEffect, useState} from "react";

import ChatOverlay from "../components/messaging/ChatOverlay";
import QRScanner from "../components/QRScanner";
import Wallet from "../models/Wallet";
import WalletBalancePreview from "../components/WalletBalancePreview";

const SFINGKS_USER_ID = 2;

export default function MainScreen() {
    const [chatOverlayVisible, setChatOverlayVisible] = useState(true);
    const [activeModule, setActiveModule] = useState(null);
    const [isBalanceLoading, setIsBalanceLoading] = useState(true);
    const wallet = Wallet.empty();

    useEffect(() => {
        // TODO: Fetch balance from backend.
        setTimeout(() => {
            wallet.balance = 100;
            setIsBalanceLoading(false);
        }, 1000);
    }, [isBalanceLoading]);

  return (
    <View style={styles.container}>
      <LinearGradient
          // Background Linear Gradient
          colors={['#FF124F', '#FF00A0', '#FE75FE', '#7A04EB', '#120458']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%'
          }}
      />
        {chatOverlayVisible && renderChatOverlay()}
        {renderActiveModule()}
        {!isBalanceLoading && <WalletBalancePreview wallet={wallet} onPress={console.log} />}
    </View>
  );

  function renderChatOverlay() {
     return <ChatOverlay chatOverlayVisible={chatOverlayVisible}
                         setChatOverlayVisible={setChatOverlayVisible}
                         setActiveModule={setActiveModule}
     />
  }

  function renderActiveModule() {
      if (activeModule) {
          switch (activeModule.type) {
              case 'test':
                  return <QRScanner handleGoHome={handleGoBackToHome}/>
          }
      }
      return null;
  }

  function handleGoBackToHome() {
      setActiveModule(null);
      setChatOverlayVisible(true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
