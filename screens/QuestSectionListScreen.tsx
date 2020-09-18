import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {FlatList, StyleSheet} from "react-native";
import QuestListItem from "../components/quest/QuestListItem";
import API, {graphqlOperation} from "@aws-amplify/api";
import {questsByCategory} from "../src/graphql/queries";
import {QuestCategory} from "../src/API";

export default function QuestSectionListScreen({ route, navigation }) {
    const { sectionId } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        navigation.setOptions({headerTitle: `${sectionId} Quests`});

        async function fetchData() {
            const quests = await API.graphql(graphqlOperation(questsByCategory, { category : sectionId }));
            setQuests(quests.data.questsByCategory.items);
            setIsLoading(false);
        }
        fetchData();

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
                keyExtractor={i => i.questId}
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
