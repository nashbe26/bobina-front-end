import React from "react";
import './style.css';

const AboutBobina = () =>{

    return(
        <div style={{position:"relative"}}>
            <div className="img-relative-ab">
                <img src={process.env.PUBLIC_URL+"/img/box.png"} alt="pos"/>
            </div>
            <div className="container-custom">
                <div className="">
                    <p className="about-main-bo pb-3">About Word <span style={{color:"#288D69"}}>Bobina</span></p>
                    <p className="desc-about-text-bo pb-4">These companies release their own versions of the operating systems with minor changes, and yet always.</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6 py-4">
                            <div className="card-blue-about">
                            <div className=""  style={{width:"15%"}}>
                                <img src={process.env.PUBLIC_URL+"/img/1.png"} alt="abt"/>
                            </div>
                            <div style={{width:"80%"}}>
                                <p className="text-main-title-text-bo">Advanced Article Rewriter</p>
                                <p className="text-sec-about-bo">Biz məlumatların statistik təhlili üzrə sizlərə professional
biznes xidmətlərimizi təklif edirik</p>
                            </div>
                        </div>
                            </div>
                            <div className="col-6 py-4">
                            <div className="card-blue-about">
                            <div className=""  style={{width:"15%"}}>
                                <img src={process.env.PUBLIC_URL+"/img/3.png"} alt="abt"/>
                            </div>
                            <div style={{width:"80%"}}>
                                <p className="text-main-title-text-bo">Advanced Article Rewriter</p>
                                <p className="text-sec-about-bo">Biz məlumatların statistik təhlili üzrə sizlərə professional
biznes xidmətlərimizi təklif edirik</p>
                            </div>
                        </div>
                            </div>
                            <div className="col-6 py-4">
                            <div className="card-blue-about">
                            <div className=""  style={{width:"15%"}}>
                                <img src={process.env.PUBLIC_URL+"/img/2.png"} alt="abt"/>
                            </div>
                            <div style={{width:"80%"}}>
                                <p className="text-main-title-text-bo">Advanced Article Rewriter</p>
                                <p className="text-sec-about-bo">Biz məlumatların statistik təhlili üzrə sizlərə professional
biznes xidmətlərimizi təklif edirik</p>
                            </div>
                        </div>
                            </div>
                            <div className="col-6 py-4">
                            <div className="card-blue-about">
                            <div className=""  style={{width:"15%"}}>
                                <img src={process.env.PUBLIC_URL+"/img/4.png"} alt="abt"/>
                            </div>
                            <div style={{width:"80%"}}>
                                <p className="text-main-title-text-bo">Advanced Article Rewriter</p>
                                <p className="text-sec-about-bo">Biz məlumatların statistik təhlili üzrə sizlərə professional
biznes xidmətlərimizi təklif edirik</p>
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

export default AboutBobina;