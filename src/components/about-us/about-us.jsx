import React from "react";
import './style.css'
const AboutUs = () =>{

    return(
        <>
        <div className="container-custom">
        <div className="aboutus-sec">
            <div className="groups-dots">
                <img src={process.env.PUBLIC_URL+'/img/groups.png'} />
            </div>

            <div className="d-flex justify-content-center pt-4 pb-3">
            <div className="about-box-container">
                    <div className="about-box">
                    
                        <p id="about-text">How much vocabulary you need?</p>
                        <div className="my-2">
                            <p id="size-compagnie">These companies release their own versions of the operating systems with minor changes, and yet always.</p>
                        </div>
                    </div>
                </div>
            </div>
                        <div className=" mx-5">
                            <div className="row justify-content-center m-0" style={{width:'100%'}}>
                                <div className="col-4 d-flex justify-content-center ">
                                    <div className="box-blue-dark-text d-flex align-items-center">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/img/local.png"} alt="local" style={{width:"44px",height:"44px"}}/>
                                        </div>
                                        <div className="">

                                            <p className="text-inside-box-rect">
                                            Connect with new words
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center ">
                                    <div className="box-blue-dark-text d-flex align-items-center">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/img/local.png"} alt="local" style={{width:"44px",height:"44px"}}/>
                                        </div>
                                        <div className="">

                                            <p className="text-inside-box-rect">
                                            Connect with new words
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center">
                                    <div className="box-blue-dark-text d-flex align-items-center">
                                        <div className="">
                                            <img src={process.env.PUBLIC_URL+"/img/local.png"} alt="local" style={{width:"44px",height:"44px"}}/>
                                        </div>
                                        <div className="">

                                            <p className="text-inside-box-rect">
                                            Connect with new words
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
           
        </div>
        </div>
       

        </>
       
        
    )

}

export default AboutUs;