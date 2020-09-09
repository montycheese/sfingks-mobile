import {ImageBackground, StyleSheet, Text, View} from "react-native";
import PointsBadge from "../PointsBadge";
import CountdownTimer from "../CountdownTimer";
import {Entypo} from "@expo/vector-icons";
import React from "react";

export default function QuestDetailsHeader({ quest }) {
    return (
        <View>
            <View style={{  marginTop: '20%', flexDirection: "row", justifyContent: 'center'}}>
                <ImageBackground source={{ uri: quest.imageUrl}} style={{width: '100%', height: 200, resizeMode: 'cover', borderWidth: '3%'}}>
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
            <View style={{ flexDirection: "row", backgroundColor: '#fff', justifyContent: 'center', padding: 5}}>
                <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
                    <Entypo name="info-with-circle" size={24} color="black" />
                </View>
                <View style={{flex: 0.8}}>
                    <Text style={{ fontFamily: 'ShareTechMono_400Regular', fontSize: 20}}>{quest.description}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
});

