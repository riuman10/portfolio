import { useState , useEffect } from "react";
import supabase from "@/utils/supabase";


const LogIn = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleLogIn = async () => {
        await supabase.auth.signInWithPassword({
            email : email,
            password : password
        })
    }
    return (
        <div>

            <p>Email</p>
            <input 
            className="border px-2 py-2"
            value = {email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />

            <p>Password</p>
            <input 
            className="border px-2 py-2"
            value = {password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            />
            

            <button onClick={handleLogIn}>Log In</button>

        </div>
    )
}



export default LogIn;