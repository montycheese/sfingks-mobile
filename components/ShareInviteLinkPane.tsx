import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/Colors";

export default function ShareInviteLinkPane(props) {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.inviteFriendsContainer}>
                <TouchableHighlight onPress={props.onClose} style={{zIndex: 10}}>
                    <View style={{position: 'absolute', top: 0, right: 0}}>
                        <AntDesign name="closecircleo" size={24} color="black" />
                    </View>
                </TouchableHighlight>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={{ marginLeft: 10, fontFamily: 'ShareTechMono_400Regular', fontSize: 12, color: '#fff'}}>Earn Points</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{ marginLeft: 10, fontFamily: 'ShareTechMono_400Regular', fontSize: 15, color: '#fff', flex: 0.7}}>Invite a friend and you can both get 50 points</Text>
                    <View style={{alignItems: 'center', flex: 0.3}}>
                        <TouchableHighlight onPress={props.onPress}>
                            <Entypo name="share-alternative" size={24} color="black" style={{zIndex: 10}} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    inviteFriendsContainer: {
        backgroundColor: Colors.cpPurple,
        marginHorizontal: 10,
        height: 70,
        borderRadius: 10,
        marginVertical: 10
    }
});
