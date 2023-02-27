import React from 'react'

import Homepage from '../screen/Homepage'
import Log from './Log'
const Auth = (props) => {
    let login = localStorage.getItem("email")
    // useEffect(() => {
    //     let login = localStorage.getItem("email")
    //     if (login) {
    //         navigate("/home")
    //     } else {
    //         navigate("/log")
    //     }
    // })
    return (
        <>
            {/* <Routes>
                <Route path='/home' element={<Homepage />} />
                <Route path='/log' element={<Log />} />
            </Routes> */}
            {
                login ? <Homepage /> :
                    <Log />
            }
        </>

    )
}

export default Auth