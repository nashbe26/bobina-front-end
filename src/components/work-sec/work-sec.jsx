import React from "react";
import './style.css';

const WorkSec = () =>{

    return(
        <div className="container-custom">
<div className="work-sec-container mt-5">
            <div className="groups-dots-work">
                <img src={process.env.PUBLIC_URL+'/img/groups.png'} />
            </div>
            

                <div className="work-desc-container">
                <div className="title-work-sec">
                    <p className="title-work">Working with Word <span className="text-green">Spinner</span> is simple. </p>

            </div>

                    <div className="row ">
                        <div className="col-6 mt-mb-5">
                            <div className="col-12 ">
                                <div className="d-flex justify-content-between box-shadow-t" style={{width:"100%"}}>
                                <div className="box-icon" style={{width:"10%"}}>
                                    <img src={process.env.PUBLIC_URL+'/img/text-a.png'} alt=""  style={{width:"30px",height:"30px"}}/>
                                </div>
                                <div className="" style={{width:"88%"}}>
                                    <p className="func-text">Paste Text</p>
                                    <p className="text-desc-work">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center  " style={{width:"100%"}}>

                    <div className="col-6 d-flex justify-content-center mt-mb-5">
                            <div className="col-12 d-flex">
                            <div className="d-flex justify-content-between box-shadow-t" style={{width:"100%"}}>
                            <div className="box-icon"  style={{width:"10%"}}>
                                    <img src={process.env.PUBLIC_URL+'/img/chart.png'} alt=""  style={{width:"30px",height:"30px"}}/>
                                </div>
                                <div className=""  style={{width:"88%"}}>
                                    <p className="func-text">Start Rewrite</p>
                                    <p className="text-desc-work">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    </p>
                                </div>
                            </div>
                               
                            </div>
                        </div>
                    </div>
                        
                        <div className="row justify-content-end  ">
                        <div className="col-6 d-flex justify-content-end  mt-mb-5">
                            <div className="col-12 d-flex">
                            <div className="d-flex justify-content-between box-shadow-t" style={{width:"100%"}}>
                            <div className="box-icon" style={{width:"10%"}}>
                                    <img src={process.env.PUBLIC_URL+'/img/check-all.png'} alt=""  style={{width:"30px",height:"30px"}}/>
                                </div>
                                <div className=""  style={{width:"88%"}}>
                                    <p className="func-text">Work Done!</p>
                                    <p className="text-desc-work">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    </p>
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

export default WorkSec;