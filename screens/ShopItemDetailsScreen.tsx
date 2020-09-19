import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import Carousel from 'react-native-snap-carousel';
import {View, Text, ImageBackground, Dimensions, StyleSheet, TouchableHighlight, Modal, ScrollView} from "react-native";
import Colors from "../constants/Colors";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {FontAwesome5} from "@expo/vector-icons";
import Wallet from "../models/Wallet";
import WalletBalancePreview from "../components/WalletBalancePreview";
import API, {graphqlOperation} from "@aws-amplify/api";
import {getRewardItem} from "../src/graphql/queries";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const icon = <FontAwesome5 name="gem" size={20} color="#000" />;

export default function ShopItemDetailsScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const wallet = Wallet.getInstance();

    let carousel = null;

    useEffect(() => {
        async function fetchData() {
            try {
                const graphqldata = await API.graphql(graphqlOperation(getRewardItem, { itemId }));
                setItem(graphqldata.data.getRewardItem);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to get quest', error);
            }

        }
        fetchData();

    }, [itemId]);


    if (isLoading || item === null) {
        return (
            <BaseView>
                <CenteredLoadingSpinner />
            </BaseView>
        );
    }

    const hasSufficientBalance = wallet.balance - item.cost >= 0;
    const purchaseButtonColor = hasSufficientBalance ?  "#2196F3" : Colors.darkGray;
    let inventoryRemaining = <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 25}}>{`${item.inventoryRemaining}`}</Text>;
    if (item.inventoryRemaining < 0) {
        inventoryRemaining = <FontAwesome5 name="infinity" size={25} color="black" />;
    }

    return (
        <BaseView>
            <WalletBalancePreview wallet={wallet} onPress={() => navigation.navigate('WalletScreen')} />
            <View style={{marginTop: '20%'}}/>
            <Carousel
                ref={(c) => { carousel = c; }}
                data={item.images}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setActiveImageIndex(index) }
                containerCustomStyle={{ flexGrow: 0 }}
            />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemNameText}>{item.title}</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#fff', justifyContent: 'center'}}>
                    <View style={{flex: 0.5, alignItems: 'center', borderRightWidth: '2%', borderTopWidth: '2%', borderBottomWidth: '2%', borderColor: Colors.grayedOut}}>
                        <Text>
                            {icon}
                            <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 25}}>{item.cost}</Text>
                        </Text>
                        <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 15, color: Colors.darkGray}}>COST</Text>
                    </View>
                    <View style={{flex: 0.5, alignItems: 'center', borderLeftWidth: '2%', borderTopWidth: '2%', borderBottomWidth: '2%', borderColor: Colors.grayedOut}}>
                        {inventoryRemaining}
                        <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 15, color: Colors.darkGray}}>{`REMAINING`}</Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <View style={{marginHorizontal: '5%', marginTop: '3%', flexDirection: 'row'}}>
                        <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 15, color: Colors.darkGray}}>Product Details</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginHorizontal: '2%', marginTop: '5%'}}>
                        <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 20, color: '#000'}}>{item.description}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableHighlight
                style={[styles.modalAcceptTermsButton, { backgroundColor: purchaseButtonColor}]}
                onPress={console.log}
            >
                <Text style={styles.modalAcceptTermsText}>{hasSufficientBalance ? 'Redeem' : 'Insufficient Funds'}</Text>
            </TouchableHighlight>
        </BaseView>
    );

    function renderItem({item, index}) {
        return (
            <View style={styles.itemContainer}>
                <ImageBackground style={{height: '100%', width: '100%'}} source={{uri: item}}>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemNameContainer: {
        marginHorizontal: '3%',
        marginTop: '2%',
    },
    scrollContainer: {
      backgroundColor: '#fff',
        marginHorizontal: '5%'
    },
    itemNameText: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'ShareTechMono_400Regular',
        textAlign: 'left'
    },

    paginationDotStyle: {
        backgroundColor: '#fff'
    },
    paginationContainerStyle: {
        position: 'absolute',
        bottom: 0
    },
    modalAcceptTermsButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        justifyContent: 'center'
    },
    modalAcceptTermsText: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: 'ShareTechMono_400Regular',
    }
});
