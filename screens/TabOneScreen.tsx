import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {LinearGradient} from "expo-linear-gradient";
import { GiftedChat } from 'react-native-gifted-chat'
import {useEffect, useState} from "react";

export default function TabOneScreen() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Hello back',
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, []);

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
      <View style={styles.chatContainer}>
          <GiftedChat
              messages={messages}
              onSend={console.log}
              user={{
                  _id: 1,
              }}
              showUserAvatar={false}
              renderAvatar={() => null}
              placeholder="Tell us something..."
              alignTop={true}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  chatContainer: {
      flex: 1,
      backgroundColor: 'black',
      opacity: 0.8,
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '10%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
