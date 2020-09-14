import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/Colors";
import React from "react";
import {FontAwesome5} from "@expo/vector-icons";

export default function QuestListItem({ quest, navigation }) {
    const icon = <FontAwesome5 name="gem" size={20} color="#000" />;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('QuestDetailsScreen', { questId: quest.questId })}>
            <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#fff', borderWidth: '1%', marginHorizontal: '3%'}}>
                <Image style={styles.thumbnail}
                       source={{uri: "https://picsum.photos/200/200"}}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{quest.title}</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <View style={styles.pointsTextIconWrapper}>
                        {icon}
                        <Text style={styles.points}>{`${quest.totalPoints}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
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
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    points: {
        fontSize: 15,
        fontFamily: 'ShareTechMono_400Regular',
        color: '#000'
    },
    pointsContainer: {
        flex: 0.2,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    pointsTextIconWrapper: {
        backgroundColor: Colors.cpHotPink, borderRadius: 5, padding: '5%', alignItems: 'center', width: '75%', marginRight: '10%'
    },
    thumbnail: {
        height: 75,
        width: '100%',
        flex: 0.3
    }
});
