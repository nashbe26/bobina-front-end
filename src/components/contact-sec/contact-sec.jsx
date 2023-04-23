import React from "react";
import './style.css';

const ManageSec = () =>{

    return(
        <div className="contact-bg-sec">
            <div className="title-contact-sec">
                <div className="text-center d-contact">

                    <p className="title-contact-main">Manage your writing smartly </p>
                    <p className="title-contact-main">with Word  <span className="text-green">Spinner</span></p>
                    <div className="py-4">
                        <p className="sec-contact-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <p className="sec-contact-text">industry. Lorem Ipsum has been</p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center  mt-4 mb-2">
                        <button class="btn-play-video"><img src="/img/play.png" class="me-2"/>How it Works</button>
                    </div>
                </div>
                <div className="text-center d-contact-md">
                
                    <p className="title-contact-main">Manage your writing smartly with Word  <span className="text-green">Spinner</span></p>
                    <div className="py-4">
                        <p className="sec-contact-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center  mt-4 mb-2">
                        <button class="btn-play-video"><img src="/img/play.png" class="me-2"/>How it Works</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ManageSec;

/**<div className="">
                <img src={process.env.PUBLIC_URL + '/img/bg.png'} />
             </div>
             <div className="">
                
             </div> */