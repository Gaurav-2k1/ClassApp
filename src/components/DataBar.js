import React from 'react'
import styled from 'styled-components'
import Clock from './Clock';
import { BsCircleFill } from 'react-icons/bs'
const DataBar = () => {
    return (
        <DataBars>
        
            <Circlediv>
                <BsCircleFill className='circleIcon' />
                <BsCircleFill className='circleIcon' />
                <BsCircleFill className='circleIcon' />

            </Circlediv>
            <Clock />
            <MainDataBlock>
                <h1>Subject : IOT</h1>
                <h1>Shweta Suryawanshi</h1>
                <h2>Attendance : 00</h2>

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