import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import DataBar from '../components/DataBar';
import SidebarTiles from '../components/SidebarTile';
import { db } from '../firebase';
import { useRef } from 'react';
import Clock from '../components/Clock';
const Homepage = () => {


    const [lec, setlec] = useState({})
    const sub = useRef("");
    const customname = useRef("");
    const [showd, setShowd] = useState(true)
    const dayr = useRef("")
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
    const [notice, setNotice] = useState()
    const loginuid = useRef()
    loginuid.current = localStorage.getItem("email")
    const getlecd = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`, "web", "docu"), (doc) => {
            customname.current = doc.data().customname;
            const d = new Date()
            // console.log(customname.current)
            const day = weekDay[d.getDay()] + "day";
            // console.log(day)

            const docref = query(collection(db, "users", `${loginuid.current}`, "timetables", `${customname.current}`, `${day}`));
            onSnapshot(docref, (querySnapshot) => {
                var tile = {};

                querySnapshot.forEach((doc) => {
                    tile[doc.id] = doc.data()
                });
                setlec(tile);
            });
            getYearac()
        })

    };
    const [log, setlog] = useState(true)

    const getShow = async () => {

        onSnapshot(doc(db, "users", `${loginuid.current}`, "show", "setShow"), (doc) => {
            if (doc.data().show === "TimeTable") {
                getlecd()
                setShowd(true)
            } else {
                getnotice()
                setShowd(false)
            }
            setlog(doc.data().log)


        })



    };

    const getnotice = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`, "Notice", "setNotice"), (doc) => {
            setNotice(doc.data().notice)
        })
    }

    const logout = () => {
        localStorage.removeItem("email")
        window.location.reload()
    }
    const lo = () => {

    }
    const [classroom, setclassroom] = useState("")
    const [department, setdepartment] = useState(null)
    const [college, setcollege] = useState(null);
    const getdetails = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`), (doc) => {
            setclassroom(doc.data().classroom)
            setdepartment(doc.data().Department)
            setcollege(doc.data().College)
        });
       

    }
    const getYearac = async () => {
        onSnapshot(doc(db, "users", `${loginuid.current}`, "timetables", `${customname.current}`), (doc) => {
            setYeara(doc.data().year)
        })

    }
    const [year, setYeara] = useState("")
    useEffect(() => {
        // getlec();
        getdetails()
        getShow()

        log ? lo() : logout()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [log])
    const [current, setcurrent] = useState("")

    return (
        <MainDiv>
            {
                showd ? <>
                    <SideBar>
                        {
                            lec ?
                                Object.entries(lec).map(([key, value]) => {
                                    return (
                                        <SidebarTiles id={key} key={key} data={value} sub={sub} current={current} setcurrent={setcurrent} />

                                    )
                                }) :
                                <>
                                    <h1 className='text-3xl text-white h-3/4  text-center'>No Data Found</h1>
                                </>
                        }
                        <Clock dayr={dayr} />

                    </SideBar>
                    <DataBar subj={current} dayr={dayr} customname={customname} loginuid={loginuid} classroom={classroom} department={department} college={college} year={year} />
                </> :
                    <div className='h-full w-full flex flex-col gap-4 items-center justify-center bg-[#000000d9]'>

                        <h1 className='text-2xl text-white underline text-center'>DR. D. Y. PATIL INSTITUTE OF ENGINEERING,MANAGEMENT & RESEARCH, AKURDI</h1>
                        <h1 className='text-5xl text-white '>Notice</h1>

                        <div className='w-full '>
                            <div className='w-3/5 h-max ml-10 p-20  border border-solid border-white rounded '>
                                <h1 className='text-white text-7xl text-center'>
                                    {notice}
                                </h1>
                            </div>
                        </div>
                        <div className="h-[450px] w-[450px] absolute -bottom-10 -right-20 rounded-full border border-solid border-red-500 flex items-center justify-center
                 animate-pulse">
                            <div className=" h-[350px] w-[350px] rounded-full border border-solid border-green-500 flex items-center justify-center">
                                <div className=" h-[250px] w-[250px] rounded-full border border-solid border-blue-500 flex items-center justify-center text-3xl font-semibold text-white">
                                    <div className=" h-[150px] w-[150px] rounded-full border border-solid border-yellow-500 flex items-center justify-center text-3xl font-semibold text-white">
                                        <h1 className='text-center '>{college}  {department}</h1>
                                    </div>

                                </div>
                            </div>
                        </div>

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
    height:75%%;
    overflow:hidden;
    width:16vw;
    background: rgba(0, 0, 0, 0.72);
    padding: 10px 5px;
    

`;




export default Homepage;