import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

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
        <TouchableOpacity onPress={props.onPress}>
            <View style={{
                ...props.style,
                ...styles.container
            }}>
                <Text style={styles.text}>{balance}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 1,
        height: 30,
        width: 60,
        backgroundColor: '#FF124F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        marginRight: 10
    },
    text: {
        color: '#fff',
        fontFamily: 'ShareTechMono_400Regular'
    }
});