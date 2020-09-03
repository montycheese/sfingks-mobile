import {Image, TouchableOpacity, StyleSheet} from "react-native";
import {View} from "../Themed";
import * as React from "react";


export default function SfingksMessage({message, onPress}: { message: object, onPress: any}) {
    return (
        <TouchableOpacity onPress={(event) => onPress(event, message)} style={styles.sfingksMessageContainerWrapper}>
            <View style={styles.sfingsMessageContainer}>
                <View style={styles.sfingksMessage}>
                    <Image source={{uri: message.image}} style={styles.sfingsMessageImage}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    sfingksMessageContainerWrapper: {
        paddingLeft: 8,
        borderRadius: 15,
    },
    sfingsMessageContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    sfingksMessage: {
        flex: 0.5,
        padding: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        width: 150,
        height: 150
    },
    sfingsMessageImage: {
        width: '100%', height: '100%', borderRadius: 15, resizeMode: 'stretch'
    }
});