import React from "react";

import './style.css'

const AboutAi = () =>{

    return (
        <div className="about-ai-sec">
            <div className="groups-dots-sec">
                <img src={process.env.PUBLIC_URL+'/img/triangle-2.png'} />
            </div>
            <div className="vocab-need-sec-t">

            <div className="row justify-content-center">
                <div className="col-12 col-lg-5 d-flex justify-content-center ">
                <div className="">

                <img src={process.env.PUBLIC_URL + '/img/ai-d.png'} style={{width:"100%"}}/>
                </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    
                    <div className="box-sec-vocab">
                        <div className="">

                            <p id="custom-text">Artificial Intelligence</p>
                            <p id="main-text-need">Find the best Synonyms Using AI Support</p>
                            <div className="ai-text-box">
                                <p id="desc-text-need">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                </p>
                            </div>
                        </div>
                        <div className="download-box-button">
                            <div className="apple-btn my-4">
                                <div className="d-flex">
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={process.env.PUBLIC_URL +'/img/apple.png'} alt="" style={{width:"auto"}}/>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <p className="text-appel">Download on the</p>
                                        <p className="text-appel-bold">App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div className="adnroid-btn my-4">
                            <div className="d-flex">
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={process.env.PUBLIC_URL +'/img/and.png'} alt="" style={{width:"auto"}}/>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <p className="text-and">Get it on</p>
                                        <p className="text-and-bold">Google Play</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>                    </div>
                </div>
            </div>
            </div>
            <div className="vocab-need-sec-mob">

            <div className="row justify-content-center">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    
                    <div className="box-sec-vocab">
                        <div className="">

                            <p id="custom-text">Artificial Intelligence</p>
                            <p id="main-text-need">Find the best Synonyms Using AI Support</p>
                            <div className="ai-text-box">
                                <p id="desc-text-need">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                </p>
                            </div>
                        </div>
                        <div className="download-box-button">
                            <div className="apple-btn my-4">
                                <div className="d-flex">
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={process.env.PUBLIC_URL +'/img/apple.png'} alt="" style={{width:"auto"}}/>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <p className="text-appel">Download on the</p>
                                        <p className="text-appel-bold">App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div className="adnroid-btn my-4">
                            <div className="d-flex">
                                    <div className="col-3 d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={process.env.PUBLIC_URL +'/img/and.png'} alt="" style={{width:"auto"}}/>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <p className="text-and">Get it on</p>
                                        <p className="text-and-bold">Google Play</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>                    </div>
                </div>
                <div className="col-12 col-lg-5 d-flex justify-content-center ">
                <div className="">

                
                <img src={process.env.PUBLIC_URL + '/img/ai-d.png'} style={{width:"100%"}}/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default AboutAi;