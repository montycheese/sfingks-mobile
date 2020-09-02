import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import {StatusBar, StyleSheet} from "react-native";

export default function ShopScreen({ navigation }) {

    return (
        <BaseView>

        </BaseView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginBottom: '15%'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#000',
        marginTop: 70
    },
});
