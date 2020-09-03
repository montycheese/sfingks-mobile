import React, {useState} from "react";
import BaseView from "../components/BaseView";
import {
    Image,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    SectionList,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import Colors from "../constants/Colors";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ShopItemDetailsModal from "../components/ShopItemDetailsModal";
import ShareInviteLinkPane from "../components/ShareInviteLinkPane";

const DATA = [
    {
        title: "Redeem for Prizes",
        data: [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 100,
            imgUrl: ''
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
            title: "KING OF OUR DISCORD FOR 1 DAY",
            cost: 800,
            imgUrl: ''
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
            title: "DIGITAL COPY OF CYBERPUNK 2077",
            cost: 7000,
            imgUrl: ''
        }]
    },
    {
        title: "Upcoming Deals",
        data: [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bza",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 100,
            imgUrl: ''
        },
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2s",
                title: "KING OF OUR DISCORD FOR 1 DAY",
                cost: 800,
                imgUrl: ''
            },
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b13",
                title: "DIGITAL COPY OF CYBERPUNK 2077",
                cost: 7000,
                imgUrl: ''
            }]
    },
    {
        title: "Past Prizes",
        data: [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bavb",
            title: "WE FOLLOW YOU ON TWITTER",
            cost: 100,
            imgUrl: ''
        },
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2dd",
                title: "KING OF OUR DISCORD FOR 1 DAY",
                cost: 800,
                imgUrl: ''
            },
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1a",
                title: "DIGITAL COPY OF CYBERPUNK 2077",
                cost: 7000,
                imgUrl: ''
            }]
    }
];

export default function ShopScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [shareInvitePaneVisible, setShareInvitePaneVisible] = useState(true);

    return (
        <BaseView>
            <View style={styles.separator}/>
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
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={(element) => renderItem(element.item)}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>
            <ShopItemDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={selectedItem} />
        </BaseView>
    );


    function renderItem(item) {

        const handleOnPress = () => {
            setSelectedItem(item);
            setModalVisible(true);
        };

        return (
            <TouchableOpacity onPress={handleOnPress} style={[styles.item]} key={item.id}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Image style={styles.thumbnail}
                           source={{uri: "https://i.picsum.photos/id/908/200/200.jpg?hmac=CovMVsq4EkU03tnOxNLyxYsLlemPPHBizxcnmaHaRcU"}}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.pointsContainer}>
                        <Text style={styles.points}>{item.cost}</Text>
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
        marginTop: 70
    },
    balanceContainer: {
        flexDirection: 'row'
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
    }
});
