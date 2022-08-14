import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    const [remail, setremail] = useState("");
    const [rpassword, setrpassword] = useState("");

    const Registor = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, remail, rpassword);
            if (user) {
                navigate("/registor", { replace: true });
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div>
                <h2>Registor</h2>
                <input type="email" placeholder="email" onChange={(e) => setremail(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setrpassword(e.target.value)} />
                <button onClick={() => Registor()}>Submit</button>
                <h2>Create An Account! <span onClick={() => navigate("/")}>Click Here</span> </h2>
            </div>
        </div>
    )
}
