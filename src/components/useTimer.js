import { useState, useEffect } from 'react'

export default function useTimer(endDate) {

    const [timer, setTimer] = useState(null);
    function clock() {
        const end = new Date(endDate);
        const now = new Date();

        const diff = (end - now) / 1000;

        if (diff < 0) return;

        const day = Math.floor(diff / 3600 / 24);
        const hour = (Math.floor(diff / 3600) % 24);
        const minutes = (Math.floor(diff / 60) % 60);
        const seconds = (Math.floor(diff) % 60);
        return { day, hour, minutes, seconds }
    }


    useEffect(() => {
        setInterval(() => {
            setTimer(clock())

        }, 1000);
    }, [])
    return ({ timer })
}
