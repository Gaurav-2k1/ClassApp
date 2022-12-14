import React, { useState } from 'react'
import styled from 'styled-components'
const Clock = () => {

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const [day, setday] = useState("...");
    const [month, setmonth] = useState("...");
    const [date, setdate] = useState("...");
    const [year, setyear] = useState("")
    const [hr, sethr] = useState("");
    const [min, setmin] = useState("");
    const [sec, setsec] = useState("");

    const updateTime = () => {
        const d = new Date()
        let time = new Date().toLocaleTimeString();

        const day = weekDay[d.getDay()];
        const month = months[d.getMonth()];
        const year = d.getFullYear()
        const date = d.getDate();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        setCurrentTime(time);
        setday(day);
        setdate(date);
        setyear(year);
        setmonth(month);
        sethr(hr);
        setmin(min);
        setsec(sec);



    }
    setInterval(updateTime, 1000);


    console.log(hr + min + sec);
    return (
        <ClockBlock>
            <h1>{day + "day"}</h1>
            <DateBlock>
                <h2>{date}</h2>
                <h2>{month}</h2>
                <h2>{year}</h2>
            </DateBlock>
            <RealtimeClock>
                {currentTime}
            </RealtimeClock>
        </ClockBlock>)
};



const ClockBlock = styled.div`
    position:absolute;
    right:10px;
    height:50%;
    width:30%;
top: -19px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(102, 173, 122, 0.2);
border: 1px solid #686464;
box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
border-radius: 5px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    font-size:2.5rem;
    color:white;
    margin:1rem 0;
    font-weight:bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;
const DateBlock = styled.div`
    margin:10px 0;
    display:flex;
    flex-direction:row;

    h2{
        background:#D9D9D9;
        padding:10px;
        margin:0 5px;
    }
`;
const RealtimeClock = styled.h1`
    margin-top:1rem;
    color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export default Clock