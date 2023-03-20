// import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import styled from 'styled-components'

const SidebarTiles = ({ id, data, current, setcurrent }) => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    


    const updateTime = () => {
        let time = new Date().toLocaleTimeString();

        setCurrentTime(time);

        if (currentTime >= data.startTime && currentTime <= data.endTime) {
            if (data.subject !== current) {
                setcurrent(id)
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

            <SideBarTileBox id={id} data={data} currentTab={current} setCurrentTab={setcurrent} title={data.subject} />

        </>


    )
}

const SideBarTileBox = ({ id,data, coloro, currentTab, setCurrentTab, title, }) => {
    return (
        <SideBarTile id={id} coloro={coloro} currentTab={currentTab} title={title} onClick={() => {
            setCurrentTab(id)
        }}>
            {
                currentTab === id ?
                    <OngoingTab coloro={coloro}>
                        <h2> Ongoing</h2>
                    </OngoingTab> :
                    <></>
            }

            <Data currentTab={currentTab} id={id}>
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
    padding:0 5px;
    height:${({ currentTab, id }) => (currentTab === id ? '25%' : '10%')};
    width:100%;
    max-height:"30%";
    background: ${({ currentTab, id }) => (currentTab === id ? ' rgba(49, 183, 175, 0.24)' : 'rgba(217, 217, 217, 0.56)')} ;
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
        font-size: 13px;
        color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
const Data = styled.div`
    
    height:${({ currentTab, id }) => (currentTab === id ? '50%' : '100%')};
    width:${({ currentTab, id }) => (currentTab === id ? ' 100%' : '100%')}; 
    color:white;
    display :flex;
    padding:0px 1px;
    flex-direction:${({ currentTab, id }) => (currentTab === id ? 'column' : 'column')} ;
    justify-content:${({ currentTab, id }) => (currentTab === id ? '' : 'center')};
    align-items: ${({ currentTab, id }) => (currentTab === id ? '' : 'left')};
    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size:9px;
        padding:2px 0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h1{
        font-weight: 700;
        font-size: 9px;
        margin-left:2px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`



export default SidebarTiles