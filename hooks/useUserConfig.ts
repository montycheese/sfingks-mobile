import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import API, {graphqlOperation} from "@aws-amplify/api";
import { getWalletBalance} from "../src/graphql/queries";

export default function useUserConfig(userData: { user: { signInUserSession: { accessToken: { payload: { sub: string; }; }; }; }; }) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const userId: string = userData.user.signInUserSession.accessToken.payload.sub;

    // Load any resources or data that we need prior to rendering the app that requires user auth
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                const graphqldata = await API.graphql(graphqlOperation(getWalletBalance, { id: userId }));
                console.log(graphqldata);
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
