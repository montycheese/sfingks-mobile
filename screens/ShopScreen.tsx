import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import {StatusBar, StyleSheet, View, Text, SafeAreaView, SectionList} from "react-native";

const DATA = [
    {
        title: "Redeem for prizes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];

export default function ShopScreen({ navigation }) {

    return (
        <BaseView>
            <View style={styles.separator}/>
            <View style={styles.balanceContainer}>
                <View style={styles.balanceTextWrapper}>
                    <Text style={styles.balanceLabel}>Point Balance</Text>
                    <Text style={styles.balance}>{100}</Text>
                </View>
            </View>
            <SafeAreaView style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>
        </BaseView>
    );
}

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#000',
        marginTop: 70
    },
    balanceContainer: {
        flexDirection: 'row',
        marginBottom: 50
    },
    balanceTextWrapper: {
        flex: 0.4,
        marginLeft: 10,
        marginTop: 10
    },
    balanceLabel: {
        fontFamily: 'ShareTechMono_400Regular',
        color: 'white',
        fontSize: 15
    },
    balance: {
        fontFamily: 'ShareTechMono_400Regular',
        color: '#000',
        fontSize: 25
    },
    header: {
        fontSize: 32,
        color: '#fff',
        marginHorizontal: 16,
        fontFamily: 'ShareTechMono_400Regular'
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    title: {
        fontSize: 24,
        fontFamily: 'ShareTechMono_400Regular'
    }
});
