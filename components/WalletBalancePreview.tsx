import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function WalletBalancePreview(props) {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{
                ...props.style,
                ...styles.container
            }}>
                <Text style={styles.text}>{props.wallet.balance}</Text>
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
