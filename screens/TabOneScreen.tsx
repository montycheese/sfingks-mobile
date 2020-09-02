import * as React from 'react';
import {StyleSheet, Image, GestureResponderEvent, Animated} from 'react-native';

import { Text, View } from '../components/Themed';
import {LinearGradient} from "expo-linear-gradient";
import {
    Actions,
    ActionsProps,
    GiftedChat,
    InputToolbar,
    Message,
    MessageText,
    Send
} from 'react-native-gifted-chat'
import {useEffect, useRef, useState} from "react";
import {getMockMessages} from "../utils/Utils";
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import SfingksMessage from "../components/messaging/SfingksMessage";

const SFINGKS_USER_ID = 2;

export default function TabOneScreen() {

    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const [messages, setMessages] = useState([]);
    const [hideChat, setHideChat] = useState(false);

    // START Required for Image picking
    const [chosenImage, setChosenImage] = useState(null);
    const [text, setText] = useState(undefined);
    // END Required for Image picking

    useEffect(() => {
        setMessages(getMockMessages())
    }, []);

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim]);

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        setText('Image'); // this is a workaround https://github.com/FaridSafi/react-native-gifted-chat/issues/1366
        setChosenImage(pickerResult.uri);
    };

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
        {!hideChat && renderChatOverlay()}
    </View>
  );

  function renderChatOverlay() {
      let imagePreview = null;
      if (chosenImage) {
          imagePreview = (
              <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.1}}/>
                  <View style={styles.thumbnailWrapper}>
                      <Image source={{ uri: chosenImage }} style={styles.thumbnail} />
                  </View>
              </View>
          );
      }

      return (
          <Animated.View style={{
              ...styles.chatContainer,
              opacity: fadeAnim}}>
              <GiftedChat
                  text={text}
                  messages={messages}
                  onSend={onSend}
                  user={{
                      _id: 1,
                  }}
                  showUserAvatar={false}
                  renderAvatar={() => null}
                  placeholder="Tell us something..."
                  alignTop={false}
                  inverted={false}
                  renderMessageText={renderMessageText}
                  renderActions={renderActions}
                  renderInputToolbar={renderInputToolbar}
                  textInputStyle={{color: 'white'}}
                  renderSend={renderSend}
                  renderMessage={renderMessage}
              />
              {imagePreview}
          </Animated.View>
      );
  }

  function renderActions(props: Readonly<ActionsProps>) {
        return (
        <Actions
            {...props}
            options={{
                ['Choose Image From Camera Roll']: openImagePickerAsync, // implement pick image from gallery or take image
            }}
            icon={() => (
                <Entypo name="attachment" size={24} color="white" />
            )}
            onSend={args => console.log('hello', args)}
        />
    );
  }

  function renderMessage(props) {
      // trying to make it so taht we can send users to different experiences via signals from backend
      // mobile interprets it as an image, and once user clicks on image, it takes them somewhere in app where they can play or do.,,
      if (props.currentMessage.text && props.currentMessage.text.startsWith('%SFINGSK%')) {
          const newMsg = Object.assign(props.currentMessage, {image: 'https://i.pinimg.com/originals/ff/16/82/ff168216b60f1091e7a346e138e694c9.gif'});
          //return <MessageImage {...props} currentMessage={newMsg} />;
          return <SfingksMessage message={newMsg} onPress={onPressSfingksMessage}/>
      }
      return <Message {...props} />
  }

  function renderMessageText(props) {
      if (props.currentMessage.text) {
          const {
              containerStyle,
              wrapperStyle,
              messageTextStyle,
              ...messageTextProps
          } = props;
          return (
              <MessageText
                  {...messageTextProps}
                  textStyle={{
                      left: [
                          {fontFamily: 'ShareTechMono_400Regular'},
                          {fontSize: 20}
                      ],
                  }}
              />
          )
      }
      return null;
  }

  function renderInputToolbar(props) {
      return <InputToolbar {...props} containerStyle={styles.inputToolbar} />
  }

  function renderSend(props) {
        return (
            <Send {...props} containerStyle={{ borderWidth: 0}} textStyle={styles.sendTextStyle}/>
        );
  }

  function onSend(newMessages = []) {
        console.log('sending', chosenImage);
        setChosenImage(null);
        setText(undefined);
        newMessages[0].image = chosenImage; // todo remove
        setMessages(GiftedChat.append(messages, newMessages))
  }

  function onPressSfingksMessage(event: GestureResponderEvent, message: object) {
      console.log('Clicked on message: ', message);
      setHideChat(true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chatContainer: {
      flex: 1,
      backgroundColor: 'black',
      opacity: 0.8,
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '10%',
      borderRadius: 15,
      paddingBottom: '5%',
      paddingTop: '5%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    thumbnailWrapper: {
        flex: 0.3,
        height: 100
    },
    inputToolbar: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        backgroundColor: '#000'
    },
    sendTextStyle: {
      color: '#fff'
    }
});
