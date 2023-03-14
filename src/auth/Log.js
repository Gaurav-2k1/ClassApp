import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase';

const Log = () => {
    const [email, setEmail] = useState({
        email: ""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmail((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    }
    const setEmailaddress = (event) => {
        event.preventDefault();
        localStorage.setItem("email", email.email)
        const docref = doc(db, "users", `${email.email}`, "show", "setShow");
        updateDoc(docref,{
            log:true
        })
        window.location.reload()
    }
    return (
        <div className='w-screen h-screen bg-green-900 flex items-center justify-center'>
            <form className='' onSubmit={setEmailaddress}>
                <div className='flex items-center gap-4'>
                    <input className='text-lg px-4 py-2 rounded-lg ' name='email' value={email.email} placeholder="Enter email" onChange={handleChange}
                        autoFocus
                    />
                    <button className='bg-red-400 text-lg px-4 py-2 rounded-lg' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Log