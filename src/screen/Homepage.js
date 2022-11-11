import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import DataBar from '../components/DataBar';
import SidebarTile from '../components/SidebarTile';
import { firebase } from '../firebase';
const Homepage = () => {

    const [tiledata, setTile] = useState([]);
    const [id, setid] = useState([]);
    const [ongoing,setongoing] = useState("first");
    const getdatatile = async () => {
        var tile = [];
        await firebase.firestore()
            .collection("tt").doc("Nov 3").collection("data").get().then(
                docsnapshot => {
                    const tile = [];
                    docsnapshot.forEach((doc) => {
                        const tiledoc = doc.data();
                        tile.push(tiledoc);
                    });
                    setTile(tile);

                }
            );

    }
    useEffect(() => {
        getdatatile().then(() => {
            console.log(tiledata);

        })
    }, [])
    return (
        <MainDiv>
            <SideBar>
                {
                    tiledata.map((data) => {
                        return (
                            <SidebarTile key={data.id} data={data} />
                        )
                    })
                }
                <SidebarT>
                    <h3>
                        00:00
                    </h3>
                    <h3>
                        IOT
                    </h3>
                </SidebarT>
                <SidebarT>
                    <h3>
                        00:00
                    </h3>
                    <h3>
                        IOT
                    </h3>
                </SidebarT>
                <SidebarT>
                    <h3>
                        00:00
                    </h3>
                    <h3>
                        IOT
                    </h3>
                </SidebarT>
                <SidebarT>
                    <h3>
                        00:00
                    </h3>
                    <h3>
                        IOT
                    </h3>
                </SidebarT>
                <SidebarT>
                    <h3>
                        00:00
                    </h3>
                    <h3>
                        IOT
                    </h3>
                </SidebarT>

            </SideBar>
            <DataBar />
        </MainDiv>
    )
}



const MainDiv = styled.section`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:row;

`;
const SideBar = styled.div`
    height:100%;
    overflow:auto;
    width:25vw;
    background: rgba(0, 0, 0, 0.72);
    padding: 30px 25px;
    

`;




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

export default Homepage;