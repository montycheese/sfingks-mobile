import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {FlatList} from "react-native";

import QuestDetailsHeader from "../components/quest/QuestDetailsHeader";
import WalletBalancePreview from "../components/WalletBalancePreview";
import Wallet from "../models/Wallet";
import TaskListItem from "../components/quest/TaskListItem";
import API, { graphqlOperation } from '@aws-amplify/api'
import {getQuest} from "../src/graphql/queries";

const wallet = Wallet.getInstance();
export default function QuestDetailsScreen({ route, navigation }) {
    const { questId } = route.params;
    const [quest, setQuest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState([]);


    useEffect(() => {

        async function fetchData() {
            try {
                const graphqldata = await API.graphql(graphqlOperation(getQuest, { questId }));
                setIsLoading(false);
                setQuest(graphqldata.data.getQuest);
                setTasks(graphqldata.data.getQuest.tasks.items);
            } catch (error) {
                console.error('Failed to get quest', error);
            }

        }
        fetchData();
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
            <WalletBalancePreview wallet={wallet} onPress={() => navigation.navigate('WalletScreen')} />
            <FlatList
                ListHeaderComponent={<QuestDetailsHeader quest={quest}/>}
                data={tasks}
                renderItem={renderItem}
                keyExtractor={i => i.taskId}
            />
        </BaseView>
    );
    // view more quests on footer

    function renderItem(item) {
        return <TaskListItem task={item.item}/>;
    }
}
