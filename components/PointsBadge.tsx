import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import * as React from "react";

export default function PointsBadge({ points, iconName, iconColor, iconSize, style, textStyle}) {
    return (
        <View style={[styles.pointsContainer, style]}>
            <Text style={{textAlign: 'center'}}>
                <FontAwesome5 name={iconName || 'gem'} size={iconSize || 15} color={iconColor || '#fff'} />
                <Text style={[styles.pointsText, textStyle]}>{points}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsText: {
        color: '#fff',
        fontFamily: 'ShareTechMono_400Regular',
    },
    pointsContainer: {
        backgroundColor: '#000',
        width: 50,
        height: 25,
        borderRadius: 4,
        justifyContent: 'center',
        padding: '5%'
    }
});
