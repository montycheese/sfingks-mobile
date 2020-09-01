import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import {LinearGradient} from "expo-linear-gradient";
import {Actions, ActionsProps, GiftedChat, MessageText} from 'react-native-gifted-chat'
import {useEffect, useState} from "react";
import {getMockMessages} from "../utils/Utils";
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function TabOneScreen() {

    const [messages, setMessages] = useState([]);
    const [chosenImage, setChosenImage] = useState(null);
    const [text, setText] = useState(undefined);


    useEffect(() => {
        setMessages(getMockMessages())
    }, []);

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
          />
          {imagePreview}
      </View>
    </View>
  );

    function renderActions(props: Readonly<ActionsProps>) {
        return (
            <Actions
                {...props}
                options={{
                    ['Choose Image From Camera Roll']: openImagePickerAsync, // implement pick image from gallery or take image
                }}
                icon={() => (
                    <Entypo name="attachment" size={24} color="black" />
                )}
                onSend={args => console.log('hello', args)}
            />
        )
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

  function onSend(newMessages = []) {
        console.log('sending', chosenImage);
        setChosenImage(null);
        setText(undefined);
        newMessages[0].image = chosenImage; // todo remove
      setMessages(GiftedChat.append(messages, newMessages))
  }
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
      borderRadius: 15,
      paddingTop: '5%'
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
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    thumbnailWrapper: {
        flex: 0.3,
        height: 100
    }
});
