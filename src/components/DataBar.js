/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsCircleFill } from 'react-icons/bs'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
const DataBar = ({ subj, college, department, customname, classroom, loginuid, year, count }) => {
    const [subinfo, setsubinfo] = useState()

    const weekDay = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];


    const getlecdata = async () => {
        const d = new Date()

        const day = weekDay[d.getDay()] + "day";
        const docref = doc(db, "users", `${loginuid.current}`, "timetables", `${customname.current}`, `${day}`, `${subj}`);
        const snapshot = await getDoc(docref)
        if (snapshot.exists()) {
            setsubinfo(snapshot.data())
        }

    };


    useEffect(() => {
        subj && getlecdata()
    }, [subj])
    return (
        <DataBars >
            <div className='flex flex-row my-3'>
                <BsCircleFill className='circleIcon' />
                <BsCircleFill className='circleIcon' />
                <BsCircleFill className='circleIcon' />
                <Circlediv>
                    <div className='flex flex-row justify-around w-full'>
                        <div className='text-4xl text-white text-center items-center font-semibold mx-4'>
                            Classroom No : {classroom}
                        </div>
                        <div className='text-4xl text-white text-center items-center font-semibold  '>
                            {college}  {department}
                        </div>
                    </div>
                </Circlediv>
            </div>


            <MainDataBlock>
                {
                    subinfo ? <>
                        {
                            subinfo.type === "Theory" ?
                                <div className='flex flex-col justify-start mt-14 w-max px-5 h-full ml-10'>
                                    <h1>Subject : {subinfo.subject}</h1>
                                    <h1>Faculty : {subinfo.teacher}</h1>
                                    <h1> Class : {year}</h1>

                                    <h2>Attendance : {count.current}</h2>
                                </div> : <div className='w-full h-full flex flex-col items-center '>
                                    <h1 className='flex items-center text-3xl font-semibold'>Practical Ongoing In Labs</h1>
                                </div>

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
                    <div className=" h-[250px] w-[250px] rounded-full border border-solid border-blue-500 flex items-center justify-center text-3xl font-semibold text-white">
                        <div className=" h-[150px] w-[150px] rounded-full border border-solid border-yellow-500 flex items-center justify-center text-3xl font-semibold text-white"></div>

                    </div>
                </div>
            </div>


        </DataBars>)
}

const DataBars = styled.div`
    position:relative;
    height:100vh;
    width:85vw;
    display:flex;
    flex-direction:column;
    background: rgba(0, 0, 0, 0.85);
    .circleIcon{
        margin:0.2rem;
        font-size:1.5rem;
        color:#D9D9D9
    }
`;


const MainDataBlock = styled.div`
    width:80%;
    height:70%;
    min-height:60%;
    border-radius: 0px 0px 42px 0px;
    display:flex;
    flex-direction:column;
    padding-left:10px;
    display:flex;
    border:solid 1px white;
    align-items:center;
    margin-left:10vw;

    h1{
        margin-left:0.5rem;
        font-size:2rem;
        color:white;
        height:100%;
    };

    h2{
        height:100%;
        margin-left:0.5rem;
        font-size:2rem;
        color:white
    }  
`;
const Circlediv = styled.div`
    padding:1rem;
    width:100%;
    height:100%;
    
    display:flex;
    flex-direction:row;
    justify-content:center;
    
    `


export default DataBar
