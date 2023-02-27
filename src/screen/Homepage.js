import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import DataBar from '../components/DataBar';
import SidebarTiles from '../components/SidebarTile';
import { db } from '../firebase';
import { useRef } from 'react';

const Homepage = () => {


    const [lec, setlec] = useState([])
    const sub = useRef("");
    const customname = useRef("");
    const [showd, setShowd] = useState(true)
    const dayr = useRef("")
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const [notice, setNotice] = useState()
    const loginuid = useRef()
    loginuid.current = localStorage.getItem("email")
    const getlecd = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`, "web", "docu"), (doc) => {
            customname.current = doc.data().customname;
            const d = new Date()

            const day = weekDay[d.getDay()] + "day";
            // console.log(day)
            const docref = query(collection(db, "users", `${loginuid.current}`, "timetables", `${customname.current}`, `${day}`));
            onSnapshot(docref, (querySnapshot) => {
                var tile = [];

                querySnapshot.forEach((doc) => {
                    // console.log(doc.data())
                    tile.push(doc.data())
                });
                setlec(tile);
                console.log(tile)
            });
        })

        // const snapshot = await getDocs(docref)
        // snapshot.forEach((doc) => {
        //     tile.push(doc.data())
        // })

    };


    const getShow = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`, "show", "setShow"), (doc) => {
            console.log(doc.data().show)
            if (doc.data().show === "TimeTable") {
                getlecd()
                setShowd(true)
            } else {
                getnotice()
                setShowd(false)
            }

        })

        // const snapshot = await getDocs(docref)
        // snapshot.forEach((doc) => {
        //     tile.push(doc.data())
        // })

    };
    const getnotice = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`, "Notice", "setNotice"), (doc) => {
            // console.log(doc.data())
            // console.log(doc.data())
            setNotice(doc.data().notice)
        })
    }
    useEffect(() => {
        // getlec();
        getShow()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [current, setcurrent] = useState("")

    return (
        <MainDiv>
            {
                showd ? <>
                    <SideBar>
                        {
                            lec.length > 0 ?
                                lec.map((data, i) => {
                                    return (
                                        <SidebarTiles id={doc.id} key={i} data={data} sub={sub} current={current} setcurrent={setcurrent} />

                                    )
                                }) :
                                <>
                                    <h1 className='text-3xl text-white h-full '>No Data Found</h1>
                                </>
                        }


                    </SideBar>
                    <DataBar subj={current} dayr={dayr} customname={customname} loginuid={loginuid} />
                </> :
                    <div className='h-full w-full flex items-center justify-center bg-[#330303]'>
                        <h1 className='text-white text-7xl text-center'>
                            {notice}
                        </h1>
                    </div>
            }

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