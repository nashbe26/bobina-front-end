import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/user.api";
import './style.css'
const SignUp = () =>{

    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [err,setErr] = useState(false) 

    const mutationLogin = useMutation(login,{
        onSuccess:(data) =>{
            localStorage.setItem('token',data.token)
            setTimeout(() => {
                
                window.location.href ='/settings'
            },1000 );
        },
        onError:(err)=>{
            setErr(true)
        }
    })

    function signout(){ 
        
        let data = {
            email,
            password
        }
        
        console.log(data);

        mutationLogin.mutate({email,password})

    }

    return(
        <div className="card-sign-in">
            <div className="d-flex justify-content-center align-content-center" style={{flexWrap: "wrap",height: "100%"}}>
                <div className="wdith-sign-center">
                    <div className="d-flex justify-content-center">
                        <div className="my-3">
                            <p className="main-signup-text">Sign In Below</p>
                            <p className="underline-text-main">Or, you can <Link to='/register' className="text-green" style={{textDecoration:'none',cursor:'pointer'}}>signup here</Link></p>
                        </div>
                    </div>
                    <div className="width-center-inputs">
                         {err ? <div className="alert alert-danger my-3"> <p>Failed to Login, Please verify your data !</p> </div> : <></>}
                        <div className="form-control-sign my-3">
                            <label id="label-input">Email Address</label>
                            <div className="">

                                <input className="input-sign-up" type="text" onChange={ e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-control-sign my-3">
                            <label id="label-input">Password</label>
                            <div className="">

                                <input className="input-sign-up"  type="password" onChange={ e => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-control-sign d-flex justify-content-between my-3">
                            <div className="d-flex">
                                <input type="checkbox" className="checkbox-rg" />
                                <p className="text-remember-me ms-3">Remember me</p>
                            </div>
                            <a href="/" className="forgot-pwd-text">Forgot your password?</a>
                        </div>
                        <div className="form-control-sign">
                            <button className="sign-btn" onClick={signout}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignUp;