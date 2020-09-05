import {Image, ImageBackground, Text} from "react-native";
import React from "react";
import Colors from "../constants/Colors";


export function getMockMessages(): Array<object> {
    const now = Date.now();
    return [
        {
            _id: 1,
            text: 'Welcome to Sfingks. We do something special each day, once a day.',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 100)
        },
        {
            _id: 4,
            text: "We'll drop hints across social media. You can even search this app for clues...",
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 105)
        },
        {
            _id: 6,
            image: 'https://placekitten.com/200/300',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 106)
        },
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
        {
            _id: 5,
            text: 'https://www.sengage.io',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(now + 500000)
        }
    ]
}

export function getOnboardingPages(): Array<object> {
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
            image: <ImageBackground source={{uri: 'https://picsum.photos/200/200'}} style={{width: 200, height: 200}}/>,
            title: 'Verify your phone number',
            subtitle: 'We need to prove you\'re a human',
        },
        {
            backgroundColor: Colors.cpBlue,
            image: <ImageBackground source={{uri: 'https://picsum.photos/200/200'}} style={{width: 200, height: 200}}/>,
            title: 'Grant Notifications',
            subtitle: 'Stay up to date on the latest quests and rewards',
        },
        {
            backgroundColor: Colors.cpPurple,
            image: <ImageBackground source={{uri: 'https://picsum.photos/200/200'}} style={{width: 200, height: 200}}/>,
            title: 'Last Step!',
            subtitle: 'Agree to our terms of use',
        }
    ];
}