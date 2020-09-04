import * as React from 'react';
import {useState} from "react";

import ChatOverlay from "../components/messaging/ChatOverlay";
import QRScanner from "../components/QRScanner";
import Wallet from "../models/Wallet";
import WalletBalancePreview from "../components/WalletBalancePreview";
import BaseView from "../components/BaseView";

export default function MainScreen({ navigation }) {
    const [chatOverlayVisible, setChatOverlayVisible] = useState(true);
    const [activeModule, setActiveModule] = useState(null);
    const wallet = Wallet.getInstance();

  return (
    <BaseView>
        {chatOverlayVisible && <WalletBalancePreview wallet={wallet} onPress={() => navigation.navigate('WalletScreen')} />}
        {chatOverlayVisible && renderChatOverlay()}
        {renderActiveModule()}
    </BaseView>
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