import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {FlatList, StyleSheet} from "react-native";
import QuestListItem from "../components/quest/QuestListItem";

export default function QuestSectionListScreen({ route, navigation }) {
    const { sectionId } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        navigation.setOptions({headerTitle: sectionId});
        // TODO: fetch section by ID
        setTimeout(() => {
            setIsLoading(false);
            setQuests([
                {
                    id: '123',
                    title: "Sfingks Daily Challenge",
                    totalPoints: 500,
                    endDate: new Date(Date.now() + 5000000),
                    imageUrl: 'https://picsum.photos/300/200',
                    slotsRemaining: 99,
                    description: 'Complete the tasks in today\'s Daily Challenge to accumulate points'
                },
                {
                    id: '124',
                    title: "Apple Code Challenge",
                    totalPoints: 1123,
                    endDate: new Date(Date.now() + 5000000),
                    imageUrl: 'https://picsum.photos/300/200',
                    slotsRemaining: 99,
                    description: 'Complete the tasks in today\'s Daily Challenge to accumulate points'
                },
                {
                    id: '125',
                    title: "Reese's app red blue green",
                    totalPoints: 123,
                    endDate: new Date(Date.now() + 5000000),
                    imageUrl: 'https://picsum.photos/300/200',
                    slotsRemaining: 99,
                    description: 'Complete the tasks in today\'s Daily Challenge to accumulate points'
                }
            ])
        }, 500);

    }, [sectionId]);


    if (isLoading) {
        return (
            <BaseView>
                <CenteredLoadingSpinner />
            </BaseView>
        );
    }

    return (
        <BaseView>
            <FlatList
                data={quests}
                renderItem={renderItem}
                keyExtractor={i => i.id}
                style={styles.list}
            />
        </BaseView>
    );

    function renderItem(item) {
        return <QuestListItem quest={item.item} navigation={navigation} />
    }
}

const styles = StyleSheet.create({
   list: {
       marginTop: '20%'
   }
});
