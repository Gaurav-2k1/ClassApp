import React from 'react'
import styled from 'styled-components'

const SidebarTile = ({ data }) => {
    return (
        <SideBarTile>
            <OngoingTab>
                <h2>ONGOING</h2>
            </OngoingTab>
            <Data>
                <h4>00:00</h4>
                <h1>{data}</h1>
            </Data>
        </SideBarTile>

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
    background: linear-gradient(180deg, rgba(5, 83, 201, 0.2) 0%, rgba(36, 255, 0, 0.2) 100%), #6CCC92;
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
export default SidebarTile