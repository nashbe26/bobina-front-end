import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rewriterFunc } from "../../api/rewriter.api";
import modeSlice, { fetchLang, fetchMode } from "../../redux/modeSlice";
import LeftBoxText from "./left-text/left-text";
import RightBoxText from "./right-text/right-text";
import Sidebar from "./sidebar/side-bar";
import './style.css';

const TextBoxSum = ()=>{

    const [mode,setMode] = useState(null);
    const [lang,setlang] = useState(null);
    const [errPrem,setErrorPrem] = useState(false);
    let dispatch = useDispatch();

    let {premPack} = useSelector(state => state.rewriteStatus)
    let {modePrem} = useSelector(state => state.rewriteStatus)

    function setModeFun(modes,i){
        let lists = document.querySelectorAll('.navbar-items-text')
        Array.from(lists).map((x,index)=>{
            if(i==index)
            lists[index].classList.add('isActive')
            else
            lists[index].classList.remove('isActive')

        })
        dispatch(fetchMode(modes))
    }

    let token = localStorage.getItem('token')

    useEffect(()=>{
        dispatch(fetchLang(lang))
    },[lang])

    useEffect(()=>{
        dispatch(fetchMode(mode))
    },[mode])

    return (
        <div className="d-flex justify-content-end mt-5">
        
        <Sidebar></Sidebar>
        
            <div className="width-text-container">
                <div className="button-check-text-mobile">
                    <div className="pos-angle-list">
                    <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <select className="paraphrase-type">
                        <option value="">Paraphraser</option>
                    </select>
                </div>
                <div className="text-container">
                    <div className="main-box-text ">
                        <div className="navbar-box-text">
                            <div className="list-chice-box">

                                <ul className="list-choice-tone">
                                    <li className="navbar-items-text-desc" >Tone: </li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('neutral',0)}>Neutral</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('curious',1)}>Curious</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('encourging',2)}>Encourging</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('formal',3)}>Formal</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('friendly',4)}>Friendly</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('informal',5)}>Informal</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('surprised',6)}>Surprised</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('worried',7)}>Worried</li>
                                </ul>
                            </div>

                        </div>
                        <div className="row d-flex mx-1">
                            <div className="col-12">
                                {premPack ? 
                                    <div className="alert alert-warning mt-mn-3">
                                       <p><i class="fa-solid fa-right-to-bracket me-2"> </i> <Link to='/register'>Register for free</Link> to get access to 2000 characters</p> 
                                    </div>
                                    :
                                    <></>
                                }
                                {modePrem ? 
                            <div className="alert alert-warning mt-mn-3">
                            <p><i class="fa-solid fa-right-to-bracket me-2"> </i>You can only select Neutral Tone. <Link to='/register'>Register for free</Link> to get access All tones</p> 
                            </div>
                            :
                            <></>    
                                }
                            </div>
                        </div>
                        <div className="navbar-box-text-mb">
                            <div className="list-chice-box-mb">
                                <div className="btn-select-type-lang">
                                <div className="pos-angle-list-lang">
                                    <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                    <select name="" className="type-btn" onChange={e => setlang(e.target.value)}>
                                    <option value="english" >English</option>
                                    <option value="french">French</option>
                                    <option value="spanish">Spanish </option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="arabic">Arabic</option>
                                    <option value="turkish">Turkish</option>
                                    </select>
                                </div>
                                <div className="btn-select-type-lang">
                                <div className="pos-angle-list-lang">
                                    <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                    <select name="" className="type-btn" onChange={e => setMode(e.target.value)}>
                                    <option value='neutral'>Neutral</option>
                                    <option value='curious'>Curious</option>
                                    <option value='encourging'>Encourging</option>
                                    <option value='formal'>Formal</option>
                                    <option value='friendly'>Friendly</option>
                                    <option value='informal'>Informal</option>
                                    <option value='surprised'>Surprised</option>
                                    <option value='worried'>Worried</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="box-rewrite-tool">
                            <div className="container-rewrite-tool">
                                <LeftBoxText></LeftBoxText>
                            </div>
                            <div className="container-rewrite-tool">
                                <RightBoxText></RightBoxText>
                            </div>
                            <div className="img-rand-pos">
                                <img src={process.env.PUBLIC_URL+'/img/rand.png'} className="img-text-rand"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-about">
                    <div className="row g-0 justify-content-between align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="text-desc-box-rew">
                                <p className="text-box-rew">
                                <span className="text-green">AI Based</span>, Free Article Rewriting Tool
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                        <div className="row justify-content-center">
                                    <div className="col-12 col-lg-12 ">

                                            <div className="row justify-content-center align-items-center border-img-sec">
                                                <div className="col-12 col-lg-5 d-flex justify-content-center d-lg-flex justify-content-end">
                                                    <div className="">
                                                        <img src={process.env.PUBLIC_URL+'/img/lamp.png'} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-7 ">
                                                <div className="border-img-secs">
                                                    <p className="text-about-ai">
                                                    Have some fun with it!. Discover how
                                                    Word Spinner can enhance your writing
                                                    within seconds.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )

}

export default TextBoxSum;