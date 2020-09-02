import * as React from 'react';
import {StyleSheet} from 'react-native';

import {  View } from '../components/Themed';
import {LinearGradient} from "expo-linear-gradient";
import { useState} from "react";

import ChatOverlay from "../components/messaging/ChatOverlay";

const SFINGKS_USER_ID = 2;

export default function MainScreen() {

    const [chatOverlayVisible, setChatOverlayVisible] = useState(true);


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
        {renderChatOverlay()}
    </View>
  );

  function renderChatOverlay() {
     return <ChatOverlay chatOverlayVisible={chatOverlayVisible} setChatOverlayVisible={setChatOverlayVisible}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
