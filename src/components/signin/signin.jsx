import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api/user.api";
import './style.css'
const SignIn = () =>{

    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [conPassword,setConPassword] = useState(null)
    const [name,setName] = useState(null)
    const [username,setUsername] = useState(null)
    const [errPwd,setErrPwd] = useState(false)
    const [err,seterr] = useState(false)

    const mutationLogin = useMutation(register,{
        onSuccess:(data) =>{
            window.location.href='/login'
        },
        onError:(err)=>{
            seterr(true)
        }
    })

    function signout(){ 
        
        let data = {
            email,
            password,
            name,
            username
        }
        
        if(password != conPassword){
            setErrPwd(true)
            console.log("fa");
        }else{

            mutationLogin.mutate({email,password,name,username})
        }


    }

    return(
        <div className="card-sign-up">
            <div className="d-flex justify-content-center align-content-center" style={{flexWrap: "wrap",height: "100%"}}>
                <div className="wdith-sign-center">
                    <div className="d-flex justify-content-center">
                        <div className="my-3">
                            <p className="main-signup-text">Sign up Below</p>
                            <p className="underline-text-main">Or, you can <Link to='/login' className="text-green" style={{textDecoration:'none',cursor:'pointer'}}>login here</Link></p>
                        </div>
                    </div>
                    <div className="width-center-inputs">

                    {err ? <div className="alert alert-danger my-3"> <p>Failed to Login, Please verify your data !</p> </div> : <></>}
                        
                        <div className="py-3">
                            <p className="profile-text-sign">Profile</p>
                            <p className="under-text-sign">Information about your account.</p>
                        </div>
                        <div className="seperator-box">

                        </div>
                        <div className="form-control-sign my-3">
                            <label id="label-input">Name</label>
                            <div className="">

                                <input className="input-sign-up" onChange={e => setName(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-control-sign my-3">
                            <label id="label-input">Username</label>
                            <div className="">

                                <input className="input-sign-up" onChange={e => setUsername(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-control-sign my-3">
                            <label id="label-input">Email Address</label>
                            <div className="">

                                <input className="input-sign-up" type="email" onChange={e => setEmail(e.target.value) } required/>
                            </div>
                        </div>
                        <div className="form-control-sign my-3">
                            <label id="label-input">Password</label>
                           
                            
                            <div className="">

                                <input className="input-sign-up" type="password" onChange={e => setPassword(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-control-sign my-3">
                            <label id="label-input">Confirm Password</label>
                            <div className="">

                                <input className="input-sign-up" type="password" onChange={e =>  setConPassword(e.target.value)} required/>
                            </div>
                             {errPwd ?
                            <div className="">

                            <span id="msg-err">Please, enter a correct confirm password.</span>
                            </div>
                            :<></> }
                        </div>

                        <div className="form-control-sign">
                            <button className="sign-btn" onClick={signout}>Register</button>
                        </div>
                        <div className="my-3 text-center">
                            <Link to='/login' className="text-account-about">Already have an account? Login here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignIn;