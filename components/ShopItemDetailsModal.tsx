import React, { useState } from "react";
import {Alert, Image, Modal, StatusBar, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function ShopItemDetailsModal({ modalVisible, setModalVisible, item }) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.thumbnailContainer}>
                        <Image style={styles.thumbnail}
                               source={{uri: "https://i.picsum.photos/id/908/200/200.jpg?hmac=CovMVsq4EkU03tnOxNLyxYsLlemPPHBizxcnmaHaRcU"}}/>
                    </View>
                    <Text style={styles.modalText}>Product Name</Text>
                    <Text style={styles.modalText}>Product Description, lorem ipsum dolor ipset</Text>
                    <TouchableHighlight
                        style={styles.closeButtonContainer}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <AntDesign name="closecircleo" size={24} color="black" />
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        flex: 1,
    },
    modalView: {
        width: '80%',
        backgroundColor: "#000",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flex: 0.5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center",
        color: '#fff',
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 24,
        width: 24,
        borderRadius: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnailContainer: {
        justifyContent: 'center',
        height: 150,
        width: 150,
        borderRadius: 15
    },
    thumbnail: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    }
});