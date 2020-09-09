import React, {useEffect, useState} from "react";
import BaseView from "../components/BaseView";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import {View, Text, ImageBackground} from "react-native";
import PointsBadge from "../components/PointsBadge";
import CountdownTimer from "../components/CountdownTimer";

export default function QuestDetailsScreen({ route, navigation }) {
    const { questId } = route.params;
    const [quest, setQuest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


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
               slotsRemaining: 99
           };
           setQuest(questResp);
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
            <View style={{  marginTop: '20%', flexDirection: "row", justifyContent: 'center'}}>
                <ImageBackground source={{ uri: quest.imageUrl}} style={{width: '100%', height: 200, resizeMode: 'cover'}}>
                    <View style={{ position: 'absolute', right: 0, bottom: '50%'}}>
                        <PointsBadge points={quest.totalPoints} iconColor="#000" style={{backgroundColor: '#fff'}} textStyle={{ color: '#000'}} />
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: '#fff', justifyContent: 'center', padding: 5}}>
                <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 25}}>{quest.title}</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: '#fff', justifyContent: 'center'}}>
                <View style={{flex: 0.5, alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 25}}>{quest.slotsRemaining}</Text>
                    <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 15, color: '#5e5b5b' }}>{`Slots Remaining`}</Text>
                </View>
                <View style={{flex: 0.5, alignItems: 'center'}}>
                    <CountdownTimer style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 25}} endDate={quest.endDate} />
                    <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 15, color: '#5e5b5b'}}>Time Remaining</Text>
                </View>
            </View>
        </BaseView>
    );


}
