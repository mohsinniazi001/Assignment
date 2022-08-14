import React, {  useState } from 'react'
import { signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../Firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    const [lemail, setlemail] = useState("");
    const [lpassword, setlpassword] = useState("");
    const Login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, lemail, lpassword);
            if(user){
                navigate("/home", { replace: true });
            }else{
                navigate("/", { replace: true });
            }
            // console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="email" onChange={(e) => setlemail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setlpassword(e.target.value)} />
            <button onClick={() => Login()}>Submit</button>
            <h2>Create An Account! <span onClick={()=>navigate("/registor")}>Click Here</span> </h2>
        </div>
    )
}
