import React, { useEffect, useState } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../Firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    const [lemail, setlemail] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setlemail(currentUser)
        })
    }, [])
    const Logout = async () => {
        if (lemail.email !== null) {
            await signOut(auth);
            navigate("/");
        }
    }

    return (
        <div>
            <button onClick={() => Logout()}>Logout</button>
            <h2>You Have Login With {lemail.email}</h2>
        </div>
    )
}
