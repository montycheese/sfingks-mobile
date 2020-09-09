import React, {useEffect, useState} from "react";
import {Text} from "react-native";

export default function CountdownTimer({ endDate, style}) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            if (endDate <= new Date()) {
                clearTimeout(timer);
                setTimeLeft('Expired');
            } else {
                setTimeLeft(calculateTimeLeft());
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <Text style={style}>{timeLeft}</Text>
    );

    function calculateTimeLeft() {
        if (endDate <= new Date()) {
            return 'Expired';
        }

        const diff = endDate - new Date();
        const hours = Math.floor(diff/(60*60*1000));
        const mins = Math.floor((diff-(hours*60*60*1000))/(60*1000));
        const secs = Math.floor((diff-(hours*60*60*1000)-(mins*60*1000))/1000);
        return `${hours}:${mins}:${secs}`;
    }
}
