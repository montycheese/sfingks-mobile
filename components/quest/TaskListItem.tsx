import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/Colors";
import {mapTaskToDescription} from "../../utils/Utils";
import React from "react";

export default function TaskListItem({ task }) {
    const {completed, points} = task;
    let icon = <FontAwesome5 name="gem" size={20} color="#000" />;
    if (completed) {
        icon = <AntDesign name="checkcircle" size={20} color="#fff" />;
    }
    return (
        <TouchableOpacity onPress={console.log}>
            <View style={{flexDirection: 'row', flex: 1, backgroundColor: (completed ? Colors.grayedOut : '#fff'), borderBottomWidth: '2%', marginHorizontal: '3%'}}>
                <Image style={styles.thumbnail}
                       source={{uri: "https://picsum.photos/200/200"}}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{mapTaskToDescription(task)}</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <View style={styles.pointsTextIconWrapper}>
                        {icon}
                        <Text style={styles.points}>{`+${points}`}</Text>
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
        fontSize: 20,
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
