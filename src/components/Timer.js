import React, { useState, useEffect } from 'react';

const TimerCountDown = () => {
    const [time, setTime] = useState({
        days: 7,
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const { miliseconds, seconds, minutes, hours, days } = time;

            if (miliseconds === 0) {
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            if (days === 0) {
                                clearInterval(interval);
                            } else {
                                setTime({ days: days - 1, hours: 23, minutes: 59, seconds: 59, miliseconds: 99 });
                            }
                        } else {
                            setTime({ days, hours: hours - 1, minutes: 59, seconds: 59, miliseconds: 99 });
                        }
                    } else {
                        setTime({ days, hours, minutes: minutes - 1, seconds: 59, miliseconds: 99 });
                    }
                } else {
                    setTime({ days, hours, minutes, seconds: seconds - 1, miliseconds: 99 });
                }
            } else {
                setTime({ days, hours, minutes, seconds, miliseconds: miliseconds - 1 });
            }
        }, 10);

        return () => clearInterval(interval);
    }, [time]);

    const { days, hours, minutes, seconds, miliseconds } = time;

    return (
        <div className="flex flex-col items-center justify-center textblack ">
            {days === 0 && hours === 0 && minutes === 0 && seconds === 0 && miliseconds === 0
                ? <h1 className="text-3xl text-gray-300">Busted!</h1>
                : 
                <div className="flex space-x-2 textblack font-medium">
                    <div className="text-center">
                        <h1 className="text-[15px]  ">{days}</h1>
                        <p className="text-[9px] leading-[8px]">DAYS</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[15px]  ">{hours}</h1>
                        <p className="text-[9px] leading-[8px]">HRS</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[15px]  ">{minutes}</h1>
                        <p className="text-[9px] leading-[8px]">MINS</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[15px]  ">{seconds}</h1>
                        <p className="text-[9px] leading-[8px]">SECS</p>
                    </div>
                    {/* <div className="text-center">
                        <h1 className="text-6xl font-light text-white">{miliseconds}</h1>
                        <p className="text-gray-500">Milliseconds</p>
                    </div> */}
                </div>
            }
        </div>
    );
};

export default TimerCountDown;
