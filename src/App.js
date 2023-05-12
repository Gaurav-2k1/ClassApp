import React, { useRef } from 'react'
import Homepage from './screen/Homepage'
import Log from './auth/Log'



const App = () => {

  let login = useRef()
  login.current = localStorage.getItem("email")



  return (
    <>
        {
          login.current ? <Homepage /> :
            <Log />
        }


    </>
  )
}

export default App