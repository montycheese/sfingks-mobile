import {StyleSheet, TouchableHighlight, TouchableOpacity, View} from "react-native";
import { Fontisto } from '@expo/vector-icons';
import React from "react";
import Colors from "../constants/Colors";

export default function ShopIcon({ onPress }) {

    return (
        <TouchableHighlight onPressIn={onPress}>
            <View style={styles.container}>
                <Fontisto name="shopping-package" size={24} color="black" />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        bottom: 5,
        height: 30,
        width: 50,
        backgroundColor: Colors.cpPink,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 10,
        marginLeft: 10
    }
});