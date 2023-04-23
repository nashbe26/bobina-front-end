import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
const IntroAiSection = () =>{



    return(
        <div className="intro-section-text-land">
            <div className="pos-trian-sec">
                <img src={process.env.PUBLIC_URL+"/img/trian.png"} alt="png"  style={{width:"100%",height:"auto"}}/>
             </div>
            <div className="row">
                <div className="col-5" >
                    <div className="container-intro-text">
                        <div style={{width:"60%"}}>
                            <p className="text-ai-intro-font">AI Based, Free Article Rewriting Tool</p>
                            <Link className="how-it-works-btn" to="/"> <img src={process.env.PUBLIC_URL+"/img/play.svg"} className="me-2" alt="playu"/>How it works</Link> 
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="my-4">
                        <div className="">
                            <img src={process.env.PUBLIC_URL+"/img/rew.png"} alt="intro" style={{width:"100%",height:"auto"}}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default  IntroAiSection;