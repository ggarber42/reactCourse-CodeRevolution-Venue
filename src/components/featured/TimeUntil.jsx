import React, {useState, useEffect} from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntil = () => {

    const [deadline, setDeadline] = useState({
        date: 'Dec, 15, 2020',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    })

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline.date) - Date.parse(new Date());
        if(time){
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            setDeadline({
                days,
                hours,
                minutes,
                seconds
            })

        }
    }

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline),1000);
    },[])

    return (

        <Slide left delay={1000}>

            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {deadline.days}
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {deadline.hours}
                        </div>
                        <div className="countdown_tag">
                            Hs
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {deadline.minutes}
                        </div>
                        <div className="countdown_tag">
                            Min
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {deadline.seconds}
                        </div>
                        <div className="countdown_tag">
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        </Slide>

    )
}

export default TimeUntil;