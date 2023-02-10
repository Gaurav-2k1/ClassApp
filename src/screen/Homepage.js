import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import DataBar from '../components/DataBar';
import SidebarTiles from '../components/SidebarTile';
import { db } from '../firebase';
const Homepage = () => {


    const [lec, setlec] = useState([])
    // const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const getlecd = async () => {
        var tile = [];
        const docref = query(collection(db, "users", `WUocfWFZ80d1zL5lRUkBNOAqzLp2`, "timetables", `Cus`, `Monday`));
        const snapshot = await getDocs(docref)
        snapshot.forEach((doc) => {
            tile.push(doc.data())
        })
        setlec(tile);
        console.log(tile)

    };

    // const getlec = async () => {
    //     let d = new Date();
    //     let dayyy = weekDay[d.getDay()] + "day";
    //     console.log(dayyy);

    //     await firebase.firestore().collection("tt").doc("Day").collection("data").where("day", "==", `${dayyy}`).get().then(
    //         docsnapshot => {
    //             const tile = [];
    //             docsnapshot.forEach((doc) => {
    //                 const tiledoc = doc.data();
    //                 tile.push(tiledoc);

    //             });
    //             console.log(tile);
    //             setlecture(tile);
    //         });
    // };
    useEffect(() => {
        // getlec();
        getlecd()
    }, [])
    return (
        <MainDiv>
            <SideBar>
                {
                    lec.map((data, i) => {
                        return (
                            <SidebarTiles key={i} data={data} />

                        )

                    })
                }


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




export default Homepage;