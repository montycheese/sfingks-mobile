import {Animated, GestureResponderEvent, StyleSheet, View, Image} from "react-native";
import {Actions, ActionsProps, GiftedChat, InputToolbar, Message, MessageText, Send} from "react-native-gifted-chat";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {getMockMessages} from "../../utils/Utils";
import * as ImagePicker from "expo-image-picker";
import {Entypo} from "@expo/vector-icons";
import SfingksMessage from "./SfingksMessage";
import {useRef} from "react";

export default function ChatOverlay(props) {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    // START Required for Image picking
    const [chosenImage, setChosenImage] = useState(null);
    const [text, setText] = useState(undefined);
    // END Required for Image picking

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(getMockMessages())
    }, []);

    useEffect(() => {
        let to = 0;
        if (props.chatOverlayVisible) {
            to = 1;
            Animated.timing(
                fadeAnim,
                {
                    toValue: to,
                    duration: 2000,
                    useNativeDriver: true
                }
            ).start();
        }
    }, [props.chatOverlayVisible]);


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
// TODO: this doesn't work on iPhone X...
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
                renderAvatar={null}
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
        setChosenImage(null);
        setText(undefined);
        newMessages[0].image = chosenImage; // todo remove
        setMessages(GiftedChat.prepend(messages, newMessages))
    }

    function onPressSfingksMessage(event: GestureResponderEvent, message: object) {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }
        ).start(({ finished }) => {
            props.setChatOverlayVisible(false);
            props.setActiveModule({ type: 'test'})
        });
    }
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.8,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        marginBottom: '2%',
        borderRadius: 15,
        paddingBottom: '5%',
        paddingTop: '5%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    thumbnailWrapper: {
        flex: 0.3,
        height: 100,
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