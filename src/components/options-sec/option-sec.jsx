import React from "react";
import './style.css';

const OptionSec = () =>{

    return(
        <div className="main-pack-sec">
            <div className="groups-dots-opt">
                <img src={process.env.PUBLIC_URL+'/img/groups.png'} />
            </div>
        <div className="aboutus-sec">

            <div className="d-flex justify-content-center pt-5 pos-info-bill"  >
            <div className="about-box-container pt-mb-mob">
                    <div className="about-box">
                        <p id="milestone-text">Several Options to <span className="text-green"> Choose</span></p>
                        <div className="d-flex justify-content-center  my-2">
                            <div className="sec-opt-box">

                                <p id="size-compagnie">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center  mt-4 mb-2">
                            <div className="bg-white-cont d-flex">
                                <button className="btn-play-mon">Monthly</button>
                                <button className="btn-play-trans">Yearly</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="pos-pack-sec">

            <div className="d-flex justify-content-center">

            <div className="width-select-pack">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-4">
                        <div className="card-pack">
                            <div className="d-flex justify-content-center">
                                <div className="width-pack-choice">
                                <div className="row py-4">
                                            <div className="col-3">
                                                <img src={process.env.PUBLIC_URL + '/img/free.png'} />
                                            </div>
                                            <div className="col-9">
                                                <div className="">
                                                    <p className="typePack">Regular </p>
                                                    <p className="typePack-desc">Starter Plan</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-benef">
                                            <ul>
                                                <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 100 Words</li>
                                                <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 65% Accuracy</li>
                                                <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 1 month Free Trial</li>
                                                <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 1000 Synoniums</li>
                                                <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> Ads Preview</li>
                                            </ul>
                                            <div className="desc-text-pay">
                                                <p className="desc-text-about">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                            </div>
                                            <div className="plan-text-box">
                                                <p className="type-plan-text">Free</p>
                                                <p className="type-plan-desc">For Limited Period</p>
                                                <div className="plan-btn pt-3 pb-4">
                                                    <button className="btn-select-plan">Select Plan</button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card-pack">
                            <div className="d-flex justify-content-center">

                                <div className="width-pack-choice">
                                    <div className="row py-4">
                                        <div className="col-3">
                                            <img src={process.env.PUBLIC_URL + '/img/free.png'} />
                                        </div>
                                        <div className="col-9">
                                            <div className="">
                                                <p className="typePack">Plantinum</p>
                                                <p className="typePack-desc">For the best results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-benef">
                                        <ul>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 3000 Words</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 9% Accuracy</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 1 month Free Trial</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/>Unlimited Synoniums</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> Ads Preview</li>
                                        </ul>
                                        <div className="desc-text-pay">
                                            <p className="desc-text-about">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                        </div>
                                        <div className="plan-text-box">
                                            <p className="type-plan-text">$342</p>
                                            <p className="type-plan-desc">For Limited Period</p>
                                            <div className="plan-btn pt-3 pb-4">
                                                <button className="btn-select-plan">Select Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card-pack">
                            <div className="d-flex justify-content-center">

                                <div className="width-pack-choice">
                                    <div className="row py-4">
                                        <div className="col-3">
                                            <img src={process.env.PUBLIC_URL + '/img/free.png'} />
                                        </div>
                                        <div className="col-9">
                                            <div className="">
                                                <p className="typePack">Standard</p>
                                                <p className="typePack-desc">Most popular</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-benef">
                                        <ul>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 500 Words</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 85% Accuracy</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 1 month Free Trial</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> 1000 Synoniums</li>
                                            <li className="list-benef-item"><img src={process.env.PUBLIC_URL + '/img/valid.png'} className="me-2" alt=""/> Ads Preview</li>
                                        </ul>
                                        <div className="desc-text-pay">
                                            <p className="desc-text-about">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                        </div>
                                        <div className="plan-text-box">
                                            <p className="type-plan-text">$234</p>
                                            <p className="type-plan-desc">For Limited Period</p>
                                            <div className="plan-btn pt-3 pb-4">
                                                <button className="btn-select-plan">Select Plan</button>
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
        </div>
        </div>
    )

}

export default OptionSec;