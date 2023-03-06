// import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setsubjectInfo } from '../features/subjectSlice';

const SidebarTiles = ({ data, current, setcurrent }) => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const dispatch = useDispatch();

    const setsubject = () => {
        dispatch(setsubjectInfo({
            subject: data.subject
        }))
    }
  

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();

        setCurrentTime(time);

        if (currentTime >= data.startTime && currentTime <= data.endTime) {
            if (data.subject !== current) {
                setcurrent(data.subject)
                setsubject()
            } else {
                setcurrent("")
            }
        }


    }
    setTimeout(data.subject !== current ? updateTime : " ", 3000);
    useState(() => {
        updateTime()
    }, [])

    return (
        <>

            <SideBarTileBox data={data} currentTab={current} setCurrentTab={setcurrent} title={data.subject} />

        </>


    )
}

const SideBarTileBox = ({ data, coloro, currentTab, setCurrentTab, title, }) => {
    return (
        <SideBarTile coloro={coloro} currentTab={currentTab} title={title} onClick={() => {
            setCurrentTab(title)
        }}>
            {
                currentTab === title ?
                    <OngoingTab coloro={coloro}>
                        <h2> Ongoing</h2>
                    </OngoingTab> :
                    <></>
            }

            <Data currentTab={currentTab} title={title}>
                <h4>{data.startTime}</h4>
                <h1>{data.subject}</h1>
            </Data>
        </SideBarTile>
    )
}


const SideBarTile = styled.div`
   cursor:pointer;
    position:relative;
    margin :1rem 0;
    padding-left:10px;
    height:${({ currentTab, title }) => (currentTab === title ? ' 20%' : '10%')};
    width:100%;
    background: ${({ currentTab, title }) => (currentTab === title ? ' rgba(49, 183, 175, 0.24)' : 'rgba(217, 217, 217, 0.56)')} ;
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
    background:linear-gradient(180deg, rgba(5, 83, 201, 0.2) 0%, rgba(36, 255, 0, 0.2) 100%), #6CCC92; 
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
    
    height:${({ currentTab, title }) => (currentTab === title ? '50%' : '100%')};
    width:${({ currentTab, title }) => (currentTab === title ? ' 40%' : '100%')}; 
    color:white;
    display :flex ;
    flex-direction:${({ currentTab, title }) => (currentTab === title ? 'column' : 'row')} ;
    justify-content:${({ currentTab, title }) => (currentTab === title ? '' : 'space-around')};
    align-items: ${({ currentTab, title }) => (currentTab === title ? '' : 'center')};
    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 0.8rem;
        padding:2px 0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    };
    h1{
        font-weight: 700;
        font-size: 15px;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`



export default SidebarTiles