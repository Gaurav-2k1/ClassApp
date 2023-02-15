import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectChannelId, setsubjectInfo } from '../features/subjectSlice';
import { db } from '../firebase';
import { useRef } from 'react';
const SidebarTiles = ({ data }) => {
    let time = new Date().toLocaleTimeString();
    const [info, setinfo] = useState()
    const [currentTime, setCurrentTime] = useState(time);
    const [cur, setcur] = useState(false)
    const dispatch = useDispatch();
    var lec = useRef()
    const setsubject = () => {
        dispatch(setsubjectInfo({
            subject: lec.current
        }))
    }
    // const change = async () => {
    //     await setDoc(doc(db, "users", `WUocfWFZ80d1zL5lRUkBNOAqzLp2`, "currentTT", "set"), {
    //         subject: data.subject,
    //         teacher: data.teacher
    //     });
    // };
    const [status, setstatus] = useState()
    const [coloro, setcolor] = useState(false)
    const col = useRef()
    const subjectSlice = useSelector(selectChannelId);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);

        if (currentTime >= data.startTime && currentTime <= data.endTime) {
            // // console.log(data.subject)
            // // console.log(re.current)
            // if(re.current!==data.subject){
            //     re.current = data.subject
            //     console.log(data.subject)
            // }

            if (subjectSlice === null) {
                let locsub = data.subject
                lec.current = locsub
                setsubject()
            } else if (subjectSlice !== data.subject) {

                let locsub = data.subject
                lec.current = locsub
                setsubject()
                // console.log(subjectSlice)


            } else {
                console.log()
            }
            // lec.current = data.subject
            // console.log(subjectSlice, " ", data.subject, " ", lec.current)

            if (coloro !== true) {
                setcolor(true)

                // console.log("set")

            }
            if (cur !== true) {
                setcur(true)

            }
            // setinfo(data.subject)
            // setsubject()

        }
        else if (currentTime >= data.endTime) {
            // setcur(false)
            var curr = coloro;
            if (curr === true && cur === true) {
                setcolor(false)
                setcur(false)
                // console.log("rem")

            }

        }
    }
    setInterval(updateTime, 1000);
    useState(() => {
        updateTime()
    }, [])

    return (
        <>
            {cur ?
                <SideBarTileBox data={data} coloro={coloro} /> :
                <SidebarTNot data={data} />}
        </>


    )
}

const SideBarTileBox = ({ data, coloro }) => {
    return (
        <SideBarTile coloro={coloro}>

            <OngoingTab coloro={coloro}>
                <h2>{coloro ? "Ongoing" : "Finished"}</h2>
            </OngoingTab>
            <Data>
                <h4>{data.startTime}</h4>
                <h1>{data.subject}</h1>
            </Data>
        </SideBarTile>
    )
}

const SidebarTNot = ({ data }) => {
    return (
        <SidebarT>
            <h3>
                {data.startTime}
            </h3>
            <h3>
                {data.subject}
            </h3>
        </SidebarT>
    )
}

const SideBarTile = styled.div`
   cursor:pointer;
    position:relative;
    margin :1rem 0;
    padding-left:20px;
    height:20%;
    width:100%;
    background: rgba(49, 183, 175, 0.24);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;

`;
const OngoingTab = styled.div`;
    position:absolute;
    padding-left:10px;
    top:15px;
    left:0px;
    height:25%;
    width:60%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    background:${({ coloro }) => (coloro ? 'linear-gradient(180deg, rgba(5, 83, 201, 0.2) 0%, rgba(36, 255, 0, 0.2) 100%), #6CCC92' : 'linear-gradient(90deg, rgba(21,20,36,1) 1%, rgba(136,9,9,1) 52%, rgba(255,0,108,1) 98%)')}; 
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
const Data = styled.div`
    
    height:50%;
    width:40%; 
    color:white;
    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        padding:5px 0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    };
    h1{
        font-weight: 700;
font-size: 15px;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`



const SidebarT = styled.div`
    height:10%;
    width:100%;
    margin:1rem 0;
    display:flex;
    flex-direction:row;
    padding:0 20px;
    justify-content: space-around;
    align-items:center;
    background: rgba(217, 217, 217, 0.56);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color:white;
    font-weight:bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export default SidebarTiles