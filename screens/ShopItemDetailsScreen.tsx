import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, ImageBackground, Dimensions, StyleSheet, TouchableHighlight, Modal, ScrollView} from "react-native";
import Colors from "../constants/Colors";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {FontAwesome5} from "@expo/vector-icons";
import Wallet from "../models/Wallet";
import WalletBalancePreview from "../components/WalletBalancePreview";

const data = [
    {
        imageUrl: "https://picsum.photos/200/200"
    }
];


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const icon = <FontAwesome5 name="gem" size={20} color="#000" />;

export default function ShopItemDetailsScreen({ route, navigation }) {
    const { itemId } = route.params;
    const [images, setImages] = useState(data);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const wallet = Wallet.getInstance();

    let carousel = null;

    useEffect(() => {
        // TODO: fetch quest by ID
        setTimeout(() => {
            setIsLoading(false);
            setItem({
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 1011,
            imageUrl: "https://picsum.photos/200/200",
            inventoryRemaining: 5,
                description: 'You will be rewarded with a follow from our official Twitter account @Sfingks! Woohoo!'
            })
        }, 500);

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

    return (
        <BaseView>
            <WalletBalancePreview wallet={wallet} onPress={() => navigation.navigate('WalletScreen')} />
            <View style={{marginTop: '20%'}}/>
            <Carousel
                ref={(c) => { carousel = c; }}
                data={data}
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
                        <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 25}}>{`${item.inventoryRemaining}`}</Text>
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
                <ImageBackground style={{height: '100%', width: '100%'}} source={{uri: item.imageUrl}}>
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
