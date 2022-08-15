import React, { useEffect, useState } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../Firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from 'firebase/firestore';

export default function Home() {
    let navigate = useNavigate();
    const [lemail, setlemail] = useState({});
    const [input, setInput] = useState('');
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
    const createTodo = async (e) => {
        e.preventDefault(e);
        if (input === '') {
            alert('Please enter a valid todo');
            return;
        }
        await addDoc(collection(db, 'tasks'), {
            Name: input,
        });
        setInput('');
    };

    return (
        <div>
            <form onSubmit={createTodo}>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text'
                placeholder='Add Todo'
                />
                <button>
                    Submit
                </button>
            </form>
            <button onClick={() => Logout()}>Logout</button>
            <h2>You Have Login With {lemail.email}</h2>
        </div>
    )
}
