import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import Colors from '../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WalletBalancePreview(props) {
    const [balance, setBalance] = useState(props.wallet.balance);

    useEffect(() => {
        let subscriberId = null;
        subscriberId = props.wallet.subscribeToBalanceChanges((newBalance: number, delta: number) => {
            setBalance(newBalance);
        });
        return () => {
            props.wallet.unsubscribe(subscriberId);
        };
    });

    return (
        <TouchableHighlight onPressIn={props.onPress} style={{zIndex: 2}}>
            <View style={{
                ...props.style,
                ...styles.container
            }}>
                <FontAwesome5 name="gem" size={24} color="#000" />
                <Text style={styles.text}>{`${balance}`}</Text>
            </View>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        top: 40,
        height: 60,
        width: 50,
        backgroundColor: Colors.cpPurple,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: Colors.cpBlue,
        borderLeftWidth: 1,
        borderBottomWidth: 1
    },
    text: {
        color: '#fff',
        fontFamily: 'ShareTechMono_400Regular',
        fontSize: 20
    }
});
