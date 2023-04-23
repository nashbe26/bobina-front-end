import React from "react";
import './style.css'
const ContactUs = () =>{

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
                    
                        <p id="about-text">Why <span style={{color:"#288D69"}}>Choose us !</span> </p>
                        <div className="my-2">
                            <p id="size-compagnie">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        </div>
                    </div>
                </div>
            </div>
                        <div className=" mx-5">
                            <div className="row justify-content-center m-0" style={{width:'100%'}}>
                                <div className="col-8 d-flex justify-content-center ">
                                    <div className="btn-explore-aln">
                                        <a Link="/settings" className="text-exlo-lang">Explore</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
           
        </div>
        </div>
       

        </>
       
        
    )

}

export default ContactUs;