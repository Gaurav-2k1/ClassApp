import React from 'react'

import Homepage from '../screen/Homepage'
import Log from './Log'
const Auth = (props) => {
    let login = localStorage.getItem("email")

    return (
        <>

            {
                login ? <Homepage /> :
                    <Log />
            }
        </>

    )
}

export default Auth