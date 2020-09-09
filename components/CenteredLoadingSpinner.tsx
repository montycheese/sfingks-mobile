import {ActivityIndicator, View} from "react-native";
import React from "react";

interface LoadingSpinner {
    color?: string;
    size?: string;
}

export default function CenteredLoadingSpinner(props: LoadingSpinner) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size={props.size || 'large'} color={props.color || '#fff'}/>
        </View>
    );
}
