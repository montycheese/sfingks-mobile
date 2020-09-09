import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {StyleSheet, FlatList, TouchableOpacity, View, Image, Text} from "react-native";

import QuestDetailsHeader from "../components/quest/QuestDetailsHeader";
import {FontAwesome5} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {getMockTasks, mapTaskToDescription} from "../utils/Utils";

export default function QuestDetailsScreen({ route, navigation }) {
    const { questId } = route.params;
    const [quest, setQuest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
       // TODO: fetch quest by ID
       setTimeout(() => {
           setIsLoading(false);
           const questResp = {
               id: questId,
               title: "Sfingks Daily Challenge",
               totalPoints: 500,
               endDate: new Date(Date.now() + 5000000),
               imageUrl: 'https://picsum.photos/300/200',
               slotsRemaining: 99,
               description: 'Complete the tasks in today\'s Daily Challenge to accumulate points'
           };
           setQuest(questResp);
           setTasks(getMockTasks());
       }, 500);

    }, [questId]);


    if (isLoading || quest === null) {
        return (
            <BaseView>
                <CenteredLoadingSpinner />
            </BaseView>
        );
    }

    return (
        <BaseView>
            <FlatList
                ListHeaderComponent={<QuestDetailsHeader quest={quest}/>}
                data={tasks}
                renderItem={renderItem}
                keyExtractor={i => i.id}
            />
        </BaseView>
    );
    // view more quests on footer

    function renderItem(item) {
        const task = item.item;
        return (
            <TouchableOpacity onPress={console.log}>
                <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#fff', borderBottomWidth: '2%', marginHorizontal: '3%'}}>
                    <Image style={styles.thumbnail}
                           source={{uri: "https://picsum.photos/200/200"}}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{mapTaskToDescription(task)}</Text>
                    </View>
                    <View style={styles.pointsContainer}>
                        <View style={{backgroundColor: Colors.cpHotPink, borderRadius: 5, padding: '5%', alignItems: 'center', width: '75%', marginRight: '10%'}}>
                            <Text style={styles.points}>{`+${task.points}`}</Text>
                            <FontAwesome5 name="gem" size={20} color="#000" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
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
        //backgroundColor: '#5e5b5b'
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
    thumbnail: {
        height: 75,
        width: '100%',
        flex: 0.3
    }
});
