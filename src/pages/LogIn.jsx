// import { Link } from 'react-router-dom';
// import useFetch from './useFetch';
// import { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { useState } from "react";
import db from "../../data/db.json";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let user = null;
            try {
                const res = await fetch('http://localhost:8000/users/' + email);
                if (res.ok) {
                    user = await res.json();
                }
            } catch {
                // Fallback to local mock data
                user = db.users.find((u) => u.email === email);
            }

            if (!user) {
                user = db.users.find((u) => u.email === email);
            }
    
            if (user && user.password === password) {
                alert("Yay!!");
            } else {
                alert("Login failed!!");
            }
        } catch {
            alert("Login failed!!");
        }
    }

    return ( 
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
            <div className="log-in-page bg-[#F8BFBD] mt-10 pl-10 pr-10 pb-10 rounded-3xl shadow-lg w-[450px]">
                <h3 className="text-3xl font-bold text-center">
                    Log in to ReadyToBake
                </h3>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-6 ">
                        <div className="flex flex-col">
                            <label className="text-[#f1356d]  mb-1 ml-1">Email address</label>
                            <input
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 border-2 border-[#f1356d] rounded-xl outline-none bg-white"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[#f1356d] mb-1 ml-1">Password</label>
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-3 border-2 border-[#f1356d] rounded-xl outline-none bg-white"
                            />
                        </div>

                        <button className=" bg-[#f35295] !text-[#F9E5C7]  py-3 rounded-xl mt-4 hover:bg-[#f1356d] transition-all">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default LogIn;

