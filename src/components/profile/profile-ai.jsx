import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { rewriterFunc } from "../../api/rewriter.api";
import { fetchMode } from "../../redux/modeSlice";
import LeftBoxText from "../ai-write/left-text/left-text";
import RightBoxText from "../ai-write/right-text/right-text";


import './style.css'
const AiSec= () =>{
    const [mode,setMode] = useState(null)
    let dispatch = useDispatch()

    function setModeFun(mode,i){
        let lists = document.querySelectorAll('.navbar-items-text')
        Array.from(lists).map((x,index)=>{
            if(i==index)
            lists[index].classList.add('isActive')
            else
            lists[index].classList.remove('isActive')

        })
        dispatch(fetchMode(mode))
    }
    


    return(
        <div className="profile-container-box">
            <div className="width-profile-text-container" style={{width:"100%!important"}}>
                <div className="button-check-text-mobile">
                    <div className="pos-angle-list">
                    <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <select className="paraphrase-type">
                        <option value="">Paraphraser</option>
                    </select>
                </div>
                <div className="text-profile-container"  style={{width:"100%!important"}}>
                    <div className="main-box-text ">
                        <div className="navbar-box-text">
                            <div className="list-chice-box">

                                <ul className="list-choice-tone">
                                    <li className="navbar-items-text-desc" >Tone: </li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('normal',0)}>Neutral</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('creative',1)}>Curious</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('fluent',2)}>Encourging</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('creative',3)}>Formal</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('friendly',4)}>Friendly</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('informal',5)}>Informal</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('surprised',6)}>Surprised</li>
                                    <li className="navbar-items-text" onClick={e=> setModeFun('worried',7)}>Worried</li>
                                </ul>
                            </div>

                        </div>
                        <div className="navbar-box-text-mb">
                            <div className="list-chice-box-mb">
                                <div className="btn-select-type-lang">
                                <div className="pos-angle-list-lang">
                                    <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                    <select name="" className="type-btn">
                                        <option value="en">English</option>
                                        <option value="fr">French</option>
                                        <option value="es">Spanish </option>
                                        <option value="pt">Portuguese</option>
                                    </select>
                                </div>
                                <div className="btn-select-type-lang">
                                <div className="pos-angle-list-lang">
                                    <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                    <select name="" className="type-btn">
                                        <option >Neutral</option>
                                        <option >Curious</option>
                                        <option >Encourging</option>
                                        <option >Formal</option>
                                        <option >Friendly</option>
                                        <option >Informal</option>
                                        <option >Surprised</option>
                                        <option >Worried</option>
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
                                AI Writer
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

export default AiSec;