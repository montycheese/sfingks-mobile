import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import {
    Image,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    SectionList,
    TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import ShopItemDetailsModal from "../components/ShopItemDetailsModal";
import ShareInviteLinkPane from "../components/ShareInviteLinkPane";
import {FontAwesome5} from "@expo/vector-icons";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import API, {graphqlOperation} from "@aws-amplify/api";
import {getQuest, rewardItemsByCategory} from "../src/graphql/queries";
import {RewardItemCategory} from "../src/API";

const DATA = [
    {
        title: "Redeem for Prizes",
        data: [{
            itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 100,
            imageUrl: "https://picsum.photos/200/200",
            inventoryRemaining: 5
        },
        {
            itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
            title: "KING OF OUR DISCORD FOR 1 DAY",
            cost: 800,
            imageUrl: "https://picsum.photos/200/200",
            inventoryRemaining: 5000
        },
        {
            itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
            title: "DIGITAL COPY OF CYBERPUNK 2077",
            cost: 7000,
            imageUrl: "https://picsum.photos/200/200",
            inventoryRemaining: -1
        }]
    },
    {
        title: "Upcoming Deals",
        data: [{
            itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bza",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 100,
            imageUrl: "https://picsum.photos/200/200",
            inventoryRemaining: -1
        },
            {
                itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2s",
                title: "KING OF OUR DISCORD FOR 1 DAY",
                cost: 800,
                imageUrl: "https://picsum.photos/200/200",
                inventoryRemaining: 5
            },
            {
                itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b13",
                title: "DIGITAL COPY OF CYBERPUNK 2077",
                cost: 7000,
                imageUrl: "https://picsum.photos/200/200",
                inventoryRemaining: 5
            }]
    },
    {
        title: "Past Prizes",
        data: [{
            itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bavb",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 100,
            imageUrl: "https://picsum.photos/200/200",
            inventoryRemaining: -1
        },
            {
                itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2dd",
                title: "KING OF OUR DISCORD FOR 1 DAY",
                cost: 800,
                imageUrl: "https://picsum.photos/200/200",
                inventoryRemaining: 5
            },
            {
                itemId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1a",
                title: "DIGITAL COPY OF CYBERPUNK 2077",
                cost: 7000,
                imageUrl: "https://picsum.photos/200/200",
                inventoryRemaining: 5
            }]
    }
];

export default function ShopScreen({ navigation }) {
    //const [modalVisible, setModalVisible] = useState(false);
    //const [selectedItem, setSelectedItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [newRewardItems, setNewRewardItems] = useState([]);
    const [shareInvitePaneVisible, setShareInvitePaneVisible] = useState(true);


    useEffect(() => {

        async function fetchData() {
            try {
                const graphqldata = await API.graphql(graphqlOperation(rewardItemsByCategory, { category: RewardItemCategory.NEW }));
                console.log(graphqldata);
                setNewRewardItems(graphqldata.data.rewardItemsByCategory.items);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to get quest', error);
            }

        }
        fetchData();
    }, []);



    if (isLoading) {
        return (
            <BaseView>
                <CenteredLoadingSpinner />
            </BaseView>
        );
    }

    const mappedData = [];
    mappedData.push({
        title: 'Redeem For Prizes',
        data: newRewardItems
    });

    return (
        <BaseView>
            <View style={styles.balanceContainer}>
                <View style={styles.balanceTextWrapper}>
                    <Text style={styles.balanceLabel}>Point Balance</Text>
                    <Text style={styles.balance}>{100}</Text>
                </View>
            </View>
            {shareInvitePaneVisible && <ShareInviteLinkPane onPress={console.log} onClose={() => setShareInvitePaneVisible(false)} />}
            <SafeAreaView style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    sections={mappedData}
                    keyExtractor={(item, index) => item.itemId}
                    renderItem={(element) => renderItem(element.item, navigation)}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>
            {/*<ShopItemDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={selectedItem} />*/}
        </BaseView>
    );


    function renderItem(item, navigation) {

        const handleOnPress = () => {
            //setSelectedItem(item);
            navigation.navigate('ShopItemDetailsScreen', { itemId: item.itemId });
            //setModalVisible(true);
        };

        let remainingText = (
            <Text style={styles.inventoryRemainingText}>{`${item.inventoryRemaining} LEFT`}</Text>
        );
        // count -1 as infinity
        if (item.inventoryRemaining === -1) {
           /*remainingText = (
               <Text>
                   <FontAwesome5 name="infinity" size={24} color="black" />
                   <Text style={styles.inventoryRemainingText}> LEFT</Text>
               </Text>
           );*/
           remainingText = null;
        }

        return (
            <TouchableOpacity onPress={handleOnPress} style={[styles.item]} key={item.id}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Image style={styles.thumbnail}
                           source={{uri: item['images'][0]}}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.pointsContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>
                                <FontAwesome5 name="gem" size={25} color="#000" />
                                <Text style={styles.points}>{item.cost}</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            {remainingText}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const textMargin = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#000',
        marginTop: '25%'
    },
    balanceContainer: {
        flexDirection: 'row',
        marginTop: '20%'
    },
    balanceTextWrapper: {
        flex: 0.4,
        marginLeft: textMargin,
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
        padding: 5,
        borderBottomColor: '#000',
        borderWidth: 3
    },
    title: {
        fontSize: 16,
        fontFamily: 'ShareTechMono_400Regular',
    },
    titleContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    points: {
        fontSize: 32,
        fontFamily: 'ShareTechMono_400Regular',
        color: Colors.cpHotPink
    },
    pointsContainer: {
        flex: 0.3,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    thumbnail: {
        height: 100,
        width: 100,
        flex: 0.3,
        borderRadius: 15
    },
    inventoryRemainingText: {
        fontSize: 20,
        fontFamily: 'ShareTechMono_400Regular',
    }
});
