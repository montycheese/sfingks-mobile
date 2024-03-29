import React, {useState} from "react";
import BaseView from "../components/BaseView";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Colors from '../constants/Colors';
import WalletBalancePreview from "../components/WalletBalancePreview";
import Wallet from "../models/Wallet";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "GOT JIGGY WITH NINJA",
        numPoints: 100,
        transactionDate: new Date().toISOString()
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "JOINED THE CULT",
        numPoints: 666,
        transactionDate: new Date().toISOString()
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "VERIFIED ✅ PHONE NUMBER",
        numPoints: 10,
        transactionDate: new Date().toISOString()
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72s",
        title: "REDEEMED JORDANS, COOL.",
        numPoints: -245,
        transactionDate: new Date().toISOString()
    },
];

export default function WalletScreen({ navigation }) {
    const [selectedId, setSelectedId] = useState(null);
    const wallet = Wallet.getInstance();

    return (
        <BaseView>
            <View style={styles.separator}/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
            <WalletBalancePreview wallet={wallet} onPress={() => {}} />
        </BaseView>
    );

    function renderItem({ item }) {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );

    }
}

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]} key={item.id}>
        <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.pointsContainer}>
                <Text style={styles.points}>{item.numPoints}</Text>
            </View>
        </View>
        <View style={styles.dateContainer}>
            <Text style={styles.date}>{new Date(item.transactionDate).toLocaleDateString()}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: '15%'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#000',
        marginTop: '25%'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        fontFamily: 'ShareTechMono_400Regular',
        flex: 0.6
    },
    points: {
        fontSize: 32,
        fontFamily: 'ShareTechMono_400Regular',
        color: Colors.cpHotPink
    },
    pointsContainer: {
        flex: 0.4,
        alignItems: 'flex-end'
    },
    dateContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 10
    },
    date: {
        fontFamily: 'ShareTechMono_400Regular',
    }
});
