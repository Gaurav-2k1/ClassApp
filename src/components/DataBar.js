/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Clock from './Clock';
import { BsCircleFill } from 'react-icons/bs'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../features/subjectSlice';
const DataBar = ({ dayr, customname }) => {
    const [subinfo, setsubinfo] = useState()
    const sub = useSelector(selectChannelId);
    // console.log(re)
    // const [subj, setsubj] = useState("");
    const getlecdata = async () => {
        var tile = [];
        const docref = query(collection(db, "users", `zJlS7kWn6yMxRuNCv8dgDOhnMAN2`, "timetables", `${customname}`, `${dayr.current}`), where("subject", "==", `${sub}`));
        const snapshot = await getDocs(docref)
        snapshot.forEach((doc) => {
            tile.push(doc.data())
        })
        console.log(tile)
        console.log("called")
        setsubinfo(tile)

    };
    // const getInfo = async () => {
    //     const docref = onSnapshot(doc(db, "users", `WUocfWFZ80d1zL5lRUkBNOAqzLp2`, "currentTT", `set`,));
    //     const unsubscribe = onSnapshot(docref, (querySnapshot) => {
    //         var tile = [];

    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.data())
    //             tile.push(doc.data())
    //         });
    //         setsubj(tile);
    //         console.log(tile)
    //     });
    // };

    useEffect(() => {
        getlecdata()
    }, [])

    console.log(sub)
    return (
        <DataBars >

            <Circlediv>
                <BsCircleFill className='circleIcon' />
                <BsCircleFill className='circleIcon' />
                <BsCircleFill className='circleIcon' />

            </Circlediv>
            <Clock dayr={dayr} />
            <MainDataBlock>
                {
                    subinfo ? <>
                        <h1>Subject : {subinfo.subject}</h1>
                        <h1>{subinfo.teacher}</h1>
                        <h2>Attendance : 00</h2>
                    </> :
                        <>
                            <div>
                                <h1>No Data Found</h1>
                            </div>
                        </>
                }


            </MainDataBlock>
            <Upcoming>
                <h1>UPCOMING LECTURE !</h1>
                <h2>VLSI</h2>
            </Upcoming>
        </DataBars>)
}

const DataBars = styled.div`
    position:relative;
    height:100vh;
    width:75vw;
    background: rgba(0, 0, 0, 0.85);
`;

const Upcoming = styled.div`
    position:absolute;
    bottom:-10px;
    left:55vh;
    width:30%;
    height:15%;
    background: #D9D9D9;
box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
border-radius:  45px 45px 0 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

    h1{
        font-weight:bold;
        font-size:1rem;
    }
`
const MainDataBlock = styled.div`
    width:40%;
    height:30%;
    border-radius: 0px 0px 42px 0px;
    display:flex;
    flex-direction:column;
    position:absolute;
    top:30vh;
    left:10vw;
    padding:2rem;
    border:white 1px solid;
    display:flex;
    align-items:left;
    h1{
        height:100%;
        margin-top:0.5rem;
        margin-left:0.5rem;
        font-size:1.5rem;
        color:white
    };

    h2{
        height:100%;
        margin : 2rem 0.5rem 0 0.5rem;
        font-size:1.5rem;
        color:white
    }  
`;
const Circlediv = styled.div`
    padding:1rem;
    width:100%;
    height:10%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:row;
    .circleIcon{
        margin:0.2rem;
        font-size:1.5rem;
        color:#D9D9D9
    }
    `


export default DataBar