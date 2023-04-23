import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './style.css'
const Feedback = () =>{

    const cardFeedRef = useRef()
    const cardFeedReffd = useRef()
    const intervalRef = useRef()
    

    function moveSrollNext() {
        intervalRef.current = setInterval(() => {
            cardFeedReffd.current.scrollLeft += 5
            console.log(cardFeedReffd.current.scrollLeft - cardFeedReffd.current.offsetLeft);
            
          }, 10);
      
    }
    function moveSrollPrev() {
        intervalRef.current = setInterval(() => {
            cardFeedReffd.current.scrollLeft -= 5
            console.log(cardFeedReffd.current.scrollLeft - cardFeedReffd.current.offsetLeft);
          }, 10);
    }

    const stopCounter = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };

    useEffect(() => {
        return () => stopCounter(); // when App is unmounted we should stop counter
      }, []);
    return(
        <div className="feedback-sec d-lg-flex justify-content-end">
            <div className="groups-dots-feedback">
                <img src={process.env.PUBLIC_URL+'/img/groups.png'} />
            </div>
            <div className="groups-feedback-work">

                <img src={process.env.PUBLIC_URL+'/img/Shape.png'} />
            </div>
            <div className="width-feedback-sec">
                <div className="like-box">
                    <div className="like-box-cont">
                        <img src={process.env.PUBLIC_URL + '/img/like.png'} />

                    </div>
                </div>
                <div className="pos-absolute-next">
                    <i class="fa-solid fa-3x fa-angle-left me-5" onMouseDown={moveSrollPrev} onMouseUp={stopCounter} onMouseLeave={stopCounter}></i>
                    <i class="fa-solid fa-3x fa-angle-right" onMouseDown={ moveSrollNext} onMouseUp={stopCounter} onMouseLeave={stopCounter}></i>
                </div>
                <div className="text-about-feed">
                    <p className="main-text-feed">1,000+ customers are</p>
                    <p className="main-text-feed"> loving Word <span className="text-green">Spinner</span></p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className=" text-about-feed-mb">
                        
                        <p className="main-text-feed"> 1,000+ customers are loving Word <span className="text-green">Spinner</span></p>
                    </div>
                </div>
                <div className="box-feedback-user" ref={cardFeedReffd}>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="user-feed-card">
                            <div className="card-feed-header">
                                <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                            </div>
                            <div className="card-feed-body">
                                <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                            </div>
                            <div className="">
                                <p className="feed-user-name">- @thepatwalls</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-feedback-user-md" ref={cardFeedRef}>
                    <div className="col-12 d-flex col-lg-12 p-0">
                        <div className="row pos-feed-container g-0">

                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 d-flex col-lg-12 p-0">
                        <div className="row pos-feed-container g-0">

                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 d-flex col-lg-12 p-0">
                        <div className="row pos-feed-container g-0">

                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="user-feed-card">
                                    <div className="card-feed-header">
                                        <img src={process.env.PUBLIC_URL + '/img/user1.png'} alt="" />
                                    </div>
                                    <div className="card-feed-body">
                                        <p className="feed-user-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    </div>
                                    <div className="">
                                        <p className="feed-user-name">- @thepatwalls</p>
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

export default Feedback;
/**  <! */