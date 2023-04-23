import React from "react";
import './style.css'
const VocabSec = () =>{

    return(
        <div className="vocab-need-sec">
            <div className="tirangle-box-about">
                <img src={process.env.PUBLIC_URL+'/img/triangle.png'} className="img-full-page"/>
            </div>
            <div className="row">
                <div className="col-12 col-lg-5 d-flex-vocab">
                    <div className="box-sec-vocab">
                        <div className="">
                            <p id="custom-text">Customization</p>
                            <p id="main-text-need">How much vocabulary you need?</p>
                            <p id="desc-text-need">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                            </p>
                        </div>
                        <div className="">

                            <p id="list-custom-text"><img src={process.env.PUBLIC_URL + '/img/local.png'} className="me-3"/> Connect with new words</p>
                            <p id="list-custom-text"><img src={process.env.PUBLIC_URL + '/img/stokc.png'} className="me-3"/> Increase chance to vocabulary</p>
                            <p id="list-custom-text">
                                <img src={process.env.PUBLIC_URL + '/img/server.png'} className="me-3"/>
                                Unlimited Words <span id="pro-text">PRO</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="display-mob">

                        <img src={process.env.PUBLIC_URL + '/img/banner-text.png'} style={{width:"100%"}}/>
                    </div>
                    <div className="display-t-mob">

                        <img src={process.env.PUBLIC_URL + '/img/mob.png'} style={{width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VocabSec