import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {FlatList} from "react-native";

import QuestDetailsHeader from "../components/quest/QuestDetailsHeader";
import {getMockTasks} from "../utils/Utils";
import WalletBalancePreview from "../components/WalletBalancePreview";
import Wallet from "../models/Wallet";
import TaskListItem from "../components/quest/TaskListItem";

const wallet = Wallet.getInstance();
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
               questId,
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
