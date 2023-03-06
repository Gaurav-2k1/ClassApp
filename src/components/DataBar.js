/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Clock from './Clock';
import { BsCircleFill } from 'react-icons/bs'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const DataBar = ({ subj, dayr, customname, loginuid }) => {
    const [subinfo, setsubinfo] = useState()

    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur'];


    const getlecdata = async () => {
        var tile = [];
        const d = new Date()

        const day = weekDay[d.getDay()] + "day";
        const docref = query(collection(db, "users", `${loginuid.current}`, "timetables", `${customname.current}`, `${day}`), where("subject", "==", `${subj}`));
        const snapshot = await getDocs(docref)
        snapshot.forEach((doc) => {
            tile.push(doc.data())
        })
        console.log(tile)
        console.log("called")
        setsubinfo(tile)
    };


    useEffect(() => {
        subj && getlecdata()
    }, [subj])

    console.log(subj)
    return (
        <DataBars >

            <Circlediv>
                <div className='flex flex-row'>
                    <BsCircleFill className='circleIcon' />
                    <BsCircleFill className='circleIcon' />
                    <BsCircleFill className='circleIcon' />
                </div>
                
                <div className='text-3xl text-white mt-4'>
                    Classroom No : 20
                </div>

            </Circlediv>

            <Clock dayr={dayr} />
            <MainDataBlock>
                {
                    subinfo ? <>
                        {
                            subinfo.map((data, i) => {
                                return (
                                    <>
                                        <h1>Subject : {data.subject}</h1>
                                        <h1>Faculty : {data.teacher}</h1>
                                        <h1> Class : BE</h1>
                                        
                                        <h2>Attendance : 00</h2>
                                    </>
                                )
                            })
                        }

                    </> :
                        <>
                            <div>
                                <h1>No Data Found</h1>
                            </div>
                        </>
                }


            </MainDataBlock>
            <div className="h-[450px] w-[450px] absolute -bottom-24 -right-10 rounded-full border border-solid border-red-500 flex items-center justify-center
                 animate-pulse">
                <div className=" h-[350px] w-[350px] rounded-full border border-solid border-green-500 flex items-center justify-center">
                    <div className=" h-[250px] w-[250px] rounded-full border border-solid border-blue-500 flex items-center justify-center text-3xl text-white">DYPIEMR</div>
                </div>
            </div>


        </DataBars>)
}

const DataBars = styled.div`
    position:relative;
    height:100vh;
    width:75vw;
    background: rgba(0, 0, 0, 0.85);
`;


const MainDataBlock = styled.div`
    width:50%;
    height:40%;
    border-radius: 0px 0px 42px 0px;
    display:flex;
    flex-direction:column;
    position:absolute;
    top:30vh;
    left:10vw;
    border:white 1px solid;
    display:flex;
    align-items:left;
    h1{
        margin-top:0.5rem;
        margin-left:0.5rem;
        font-size:1rem;
        color:white;
        height:100%;
    };

    h2{
        height:100%;
        margin-top :10px;
        font-size:1rem;
        color:white
    }  
`;
const Circlediv = styled.div`
    padding:1rem;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    .circleIcon{
        margin:0.2rem;
        font-size:1.5rem;
        color:#D9D9D9
    }
    `


export default DataBar