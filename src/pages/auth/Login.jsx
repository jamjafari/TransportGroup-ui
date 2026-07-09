import { useState } from "react";
import { login } from "../../services/authService";

function Login()
{
    const [userName,setUserName] =
        useState("");

    const [password,setPassword] =
        useState("");

    const [error,setError] =
        useState("");

    const handleSubmit = async(e) => {

        e.preventDefault();
       

        try{

            const result =
                await login(
                    userName,
                    password);
            console.log(result);
            localStorage.setItem(
                "accessToken",
                result.accessToken);

            window.location.href="./";

        }
        catch{

            setError(
                "نام کاربری یا رمز عبور اشتباه است");
        }
    };



    return(
        <div>

            <h2>ورود به سیستم</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="نام کاربری"
                    value={userName}
                    onChange={(e)=>
                        setUserName(e.target.value)}
                />

                <br/>

                <input
                    type="password"
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e)=>
                        setPassword(e.target.value)}
                />

                <br/>

                <button type="submit">
                    ورود
                </button>

            </form>

            {error}

        </div>
    );
}

export default Login;