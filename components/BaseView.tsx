import {LinearGradient} from "expo-linear-gradient";
import {View} from "./Themed";
import * as React from "react";
import {StyleSheet} from "react-native";

export default function BaseView(props) {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#FF124F', '#FF00A0', '#FE75FE', '#7A04EB', '#120458']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
            />
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
