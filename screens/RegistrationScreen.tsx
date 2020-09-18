import {getOnboardingPages} from "../utils/Utils";
import React, {useState} from "react";
import Onboarding from 'sengage-onboarding-swiper';
import * as Notifications from "expo-notifications";
import {Platform, TouchableOpacity, View, Text} from "react-native";
import { Auth } from 'aws-amplify'

const NOTIFICATION_PAGE_INDEX = 4;
const PHONE_NUMBER_INPUT_INDEX = 2;
const PHONE_NUMBER_VERIFY_INDEX = 3;

export default function RegistrationScreen({ onOnboardingComplete }) {
    const [isNotificationsAllowed, setIsNotificationsAllowed] = useState(false);
    const [index, setPageIndex] = useState(0);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [isPhoneNumberInputValid, setIsPhoneNumberInputValid] = useState(false);
    const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);

    // TODO: Fix issue where if they put the wrong phone number, you can't scroll back. Maybe combine both pages into 1?
    return (
        <Onboarding pages={
            getOnboardingPages({
                isNotificationsAllowed, isTermsAccepted,
                setIsTermsAccepted, isPhoneNumberVerified, setIsPhoneNumberVerified,
                isPhoneNumberInputValid, setIsPhoneNumberInputValid, signUp
            })}
                    titleStyles={{fontFamily: 'ShareTechMono_400Regular'}}
                    subTitleStyles={{fontFamily: 'ShareTechMono_400Regular'}}
                    pageIndexCallback={onPageChange}
                    showSkip={false}
                    showNext={showNext()}
                    showDone={isTermsAccepted}
                    onDone={onOnboardingComplete}
                    flatlistProps={{ scrollEnabled: showNext() }}

        />
    );

    async function onPageChange(pageIndex: number) {
        // Have to do notifications this way because the onboarding lib doesn't lazy load each view
        if (pageIndex === NOTIFICATION_PAGE_INDEX) {
            await requestPermissions();
        }
        setPageIndex(pageIndex);
    }

    function showNext() {
        return (index === PHONE_NUMBER_VERIFY_INDEX && isPhoneNumberVerified)
            || (index === PHONE_NUMBER_INPUT_INDEX && isPhoneNumberInputValid)
        || (index !== PHONE_NUMBER_VERIFY_INDEX && index !== PHONE_NUMBER_INPUT_INDEX);
    }

    function requestPermissions() {
        return Notifications.requestPermissionsAsync({
            // android is asked by default.
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true,
                allowAnnouncements: true
            }
        }).then(resp => {
            if (Platform.OS === 'ios' && resp.ios.allowsAlert) {
                setIsNotificationsAllowed(true);
            }
            // TODO android.
            /**
             * Object {
  "ios": Object {
    "alertStyle": 0,
    "allowsAlert": false,
    "allowsAnnouncements": null,
    "allowsBadge": false,
    "allowsCriticalAlerts": null,
    "allowsDisplayInCarPlay": null,
    "allowsDisplayInNotificationCenter": false,
    "allowsDisplayOnLockScreen": false,
    "allowsPreviews": 1,
    "allowsSound": false,
    "providesAppNotificationSettings": false,
    "status": 1,
  },
  "status": 0,
}
             */
        });
    }

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username: '+18086333680',
                password: 'password',
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
}
