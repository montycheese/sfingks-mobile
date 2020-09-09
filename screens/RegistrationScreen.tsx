import {getOnboardingPages} from "../utils/Utils";
import React, {useState} from "react";
import Onboarding from 'sengage-onboarding-swiper';
import * as Notifications from "expo-notifications";
import {Platform} from "react-native";


const NOTIFICATION_PAGE_INDEX = 4;
const PHONE_NUMBER_INPUT_INDEX = 2;
const PHONE_NUMBER_VERIFY_INDEX = 3;

export default function RegistrationScreen({ onOnboardingComplete }) {
    const [isNotificationsAllowed, setIsNotificationsAllowed] = useState(false);
    const [index, setPageIndex] = useState(0);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [isPhoneNumberInputValid, setIsPhoneNumberInputValid] = useState(false);
    const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);
    return (
        <Onboarding pages={
            getOnboardingPages({
                isNotificationsAllowed, isTermsAccepted,
                setIsTermsAccepted, isPhoneNumberVerified, setIsPhoneNumberVerified,
                isPhoneNumberInputValid, setIsPhoneNumberInputValid
            })}
                    titleStyles={{fontFamily: 'ShareTechMono_400Regular'}}
                    subTitleStyles={{fontFamily: 'ShareTechMono_400Regular'}}
                    pageIndexCallback={onPageChange}
                    showSkip={false}
                    showNext={showNext()}
                    showDone={isTermsAccepted}
                    onDone={onOnboardingComplete}

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
            if (Platform.OS === 'ios' && resp.ios.allowAlert) {
                isNotificationsAllowed(true);
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
}
