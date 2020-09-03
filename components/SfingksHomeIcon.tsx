import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SfingksHomeIcon(props) {

    return (
        <TouchableOpacity onPressIn={props.onPress}>
            <View style={{
                ...props.style,
                ...styles.container
            }}>
                <AntDesign name="home" size={24} color="white" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: (Dimensions.get('window').width / 2) - 25,
        bottom: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    }
});