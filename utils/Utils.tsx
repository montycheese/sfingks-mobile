import {
    TextInput,
    ImageBackground,
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity
} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from "../constants/Colors";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import { CheckBox } from 'react-native-elements'
import TermsOfService from '../assets/legal/TermsOfService';


export function getMockMessages(): Array<object> {
    const now = Date.now();
    return [
        {
            _id: 1,
            text: 'Welcome to Sfingks, the BEST place to access exclusive drops, engage with brands you love, and earn rewards',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 100)
        },
        {
            _id: 4,
            text: "Check back everyday for new Quests. Complete them to unlock rewards!",
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 105)
        },
        {
            _id: 33,
            text: 'Hello back',
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 106)
        },
        {
            _id: 5,
            text: "The 100 Thieves event is happening RIGHT NOW. Click the image 👇 to join.",
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 108)
        },
        /*{
            _id: 6,
            image: 'https://placekitten.com/200/300',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 106)
        },*/
        {
            _id: 7,
            text: '%SFINGSK%_GAME-GAME_TYPE-some_uuid',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 107)
        },
        {
            _id: 2,
            text: 'Hello back',
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 108)
        },
        {
            _id: 3,
            text: 'Hello back',
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 50000)
        },
        /*{
            _id: 5,
            text: 'https://www.sengage.io',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 500000)
        }*/
    ]
}

function PhoneNumberInput({ isPhoneNumberInputValid, setIsPhoneNumberInputValid }: {isPhoneNumberInputValid: boolean, setIsPhoneNumberInputValid: any}) {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (input !== '' && input.length === 10) {
            setIsPhoneNumberInputValid(true);
        } else {
            setIsPhoneNumberInputValid(false);
        }

    }, [input]);

    //https://github.com/facebook/react-native/issues/23735
    return (
        <View>
            <TextInput
                style={{fontSize: 32, fontFamily: 'ShareTechMono_400Regular'}}
                placeholder="(100)SFI-NKGS"
                onChangeText={(text) => {
                    if (text.length <= 10) {
                        setInput(text.replace(/[^0-9]/g, ''));
                    }
                }}
                value={input}
                keyboardType="phone-pad"
            />
            { isPhoneNumberInputValid === true &&
            <View style={{flexDirection: 'col', alignItems: 'center'}}>
                <View style={{ backgroundColor: '#fff', borderRadius: 25, marginTop: '5%', padding: 5, width: '50%'}}>
                    <Text style={{fontFamily: 'ShareTechMono_400Regular', textAlign: 'center'}}>Looks Good!</Text>
                </View>
            </View>
            }
        </View>
    );
}

function Verify ({ setIsPhoneNumberVerified, isPhoneNumberVerified }: { setIsPhoneNumberVerified: any, isPhoneNumberVerified: boolean}) {
    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        if (value.length === CELL_COUNT) {
            // TODO: verify OTP
            setIsVerifying(true);
            setTimeout(() => {
                setIsVerifying(false);
                setIsPhoneNumberVerified(true);
            }, 2000);}
    }, [value]);

    let badgeText = 'DIDN\'T GET A CODE? >';

    if (isVerifying) {
        badgeText = 'VERFIYING...';
    } else if (!isVerifying && isPhoneNumberVerified) {
        badgeText = 'VERIFIED!';
    }

    return (
        <View>
            <CodeField
                ref={ref}
                {...cellProps}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor/> : null)}
                    </Text>
                )}
            />
            <View style={{flexDirection: 'col', alignItems: 'center', marginTop: '10%'}}>
                <View style={{ backgroundColor: '#fff', borderRadius: 25, padding: 5, width: '75%'}}>
                    <Text style={{fontFamily: 'ShareTechMono_400Regular', textAlign: 'center'}}>{badgeText}</Text>
                </View>
            </View>
        </View>
    );
};

function NotificationsRequester({ isNotificationsAllowed }: {isNotificationsAllowed: boolean}) {
    return (
        <View>
            {isNotificationsAllowed === true && <Text style={styles.notificationText}>Notifications Granted ✅</Text>}
        </View>
    );
};


export function getOnboardingPages(props): Array<object> {

    const AcceptTerms = ({isTermsAccepted, setIsTermsAccepted }: { isTermsAccepted: boolean, setIsTermsAccepted: any}) => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        return (
          <View>
              <View style={{flexDirection: 'col', alignItems: 'center', marginTop: '10%'}}>
                  <TouchableOpacity onPress={() => setIsModalOpen(true)}>
                      <View style={{ backgroundColor: '#fff', borderRadius: 25, padding: 15}}>
                          <Text style={{fontFamily: 'ShareTechMono_400Regular', textAlign: 'center'}}>View Terms</Text>
                      </View>
                  </TouchableOpacity>
              </View>
              <View>
                  <CheckBox
                      center
                      containerStyle={styles.checkbox}
                      textStyle={styles.termsText}
                      title='I Agree'
                      checked={isTermsAccepted}
                      onPress={() => setIsTermsAccepted(!isTermsAccepted)}
                  />
              </View>
              <View>
                  <Modal
                      animationType="slide"
                      transparent={true}
                      visible={isModalOpen}
                      onRequestClose={() => setIsModalOpen(!isModalOpen)}>
                      <View style={styles.centeredView}>
                          <ScrollView>
                              <View style={styles.modalView}>
                                  <Text style={styles.modalText}>Terms of Service</Text>
                                  <Text>
                                      {TermsOfService}
                                  </Text>
                                  <TouchableHighlight
                                      style={styles.modalDeclineTermsButton}
                                      onPress={() => {
                                          setIsTermsAccepted(false);
                                          setIsModalOpen(false);
                                      }}
                                  >
                                      <Text style={styles.modalAcceptTermsText}>Decline Terms</Text>
                                  </TouchableHighlight>
                              </View>
                          </ScrollView>
                      </View>
                      <TouchableHighlight
                          style={styles.modalAcceptTermsButton}
                          onPress={() => {
                              setIsTermsAccepted(true);
                              setIsModalOpen(false);
                          }}
                      >
                          <Text style={styles.modalAcceptTermsText}>I Accept</Text>
                      </TouchableHighlight>
                  </Modal>
              </View>
          </View>
        );
    };

    return [
        {
            backgroundColor: Colors.cpRed,
            image: <ImageBackground source={{uri: 'https://picsum.photos/200/200'}} style={{width: 200, height: 200}}/>,
            title: 'SFINGKS',
            subtitle: 'Engage with brands & experience daily exclusive content',
        },
        {
            backgroundColor: Colors.cpHotPink,
            image: <ImageBackground source={{uri: 'https://picsum.photos/200/200'}} style={{width: 200, height: 200}}/>,
            title: 'Exchange your GEMs for exclusive merchandise or digital rewards',
            subtitle: 'Limited edition shoes, Video games',
        },
        {
            backgroundColor: Colors.cpPink,
            image: <PhoneNumberInput {...props} />,
            title: 'Verify your phone number',
            subtitle: 'We need to prove you\'re a human. We promise we won\'t share this.',
        },
        {
            backgroundColor: Colors.cpPink,
            image: <Verify {...props}/>,
            title: 'We just sent you a code',
            subtitle: 'Just to make sure you\'re real.',
        },
        {
            backgroundColor: Colors.cpBlue,
            image: <NotificationsRequester {...props} />,
            title: 'Grant notifications',
            subtitle: 'Stay up to date on the latest quests and rewards',
        },
        {
            backgroundColor: Colors.cpPurple,
            image: <AcceptTerms {...props} />,
            title: 'Last Step!',
            subtitle: 'Agree to our terms of use',
        }
    ];
}

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#fff',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    termsText: {
        fontFamily: 'ShareTechMono_400Regular',
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 33
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalAcceptTermsText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalAcceptTermsButton: {
        backgroundColor: "#2196F3",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '5%',
        justifyContent: 'center'
    },
    modalDeclineTermsButton: {
        backgroundColor: "#2196F3"
    },
    notificationText: {
        fontSize: 25
    }
});
