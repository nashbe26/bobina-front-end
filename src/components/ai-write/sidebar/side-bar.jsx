import React from "react";
import { useRef } from "react";
import './style.css'

const Sidebar = () =>{

    const hiddenWidthRef = useRef(null)
    const shownWidthRef = useRef(null)

    function swipeRight(){
    
        hiddenWidthRef.current.style.display='none'
        shownWidthRef.current.style.display='block'
    }

    function swipeLeft(){
        
        hiddenWidthRef.current.style.display='block'
        shownWidthRef.current.style.display='none'

    }
    
    return(
        <>
        <div className="sidebar-sec" ref={hiddenWidthRef}>
                <div className="d-flex justify-content-center">
                    <div className="">
                        <div className="list-style">
                    <ul>
                        <li style={{cursor:'pointer'}} className="group-li-green"><div><img src={process.env.PUBLIC_URL+'/img/arr.png'} onClick={swipeRight} /> </div> </li>
                        <div className="mt-5">

                            <li className="group-li-blue mt-3"><div><img src={process.env.PUBLIC_URL+'/img/ask.png'} /></div></li>
                            <li className="group-li-red my-3"><div><img src={process.env.PUBLIC_URL+'/img/text.png'} /></div></li>
                            <li className="group-li-yal my-3"><div><img src={process.env.PUBLIC_URL+'/img/scan.png'} /></div></li>
                        </div>
                    </ul>
                </div>
                <div className="list-fqa">
                    <ul>
                        <li className="group-li-fqa"><div><img src={process.env.PUBLIC_URL+'/img/message.png'} /></div></li>
                        <li className="group-li-fqa mt-3"><div><img src={process.env.PUBLIC_URL+'/img/fqa.png'} /></div></li>
                    </ul>
                </div>
                    </div>
                </div>
                
            </div>
            <div className="sidebar-sec-full-width" ref={shownWidthRef}>
                <div className="d-flex justify-content-center sidebar-d ">
                    <div className="width-after-slide">
                        <div className="list-style">
                    <ul>
                        <div className="mt-mb-5 d-flex justify-content-between align-items-center">

                        <li className="setting-item-bar">Settings</li> 
                        <li  style={{cursor:'pointer'}} className=" group-li-green "><div><img src={process.env.PUBLIC_URL+'/img/arr.png'} className="trans-right" onClick={swipeLeft}/> </div> </li>

                        </div>
                        <li className="bg-white-item  mt-3"><div className="group-li-blue me-2 "><img src={process.env.PUBLIC_URL+'/img/ask.png'} /></div>  Grammar Checker</li>
                        <li className="bg-white-item  my-3"><div className="group-li-red me-2" ><img src={process.env.PUBLIC_URL+'/img/text.png'} /></div>Paraphraser</li>
                        <li className="bg-white-item my-3"><div className="group-li-yal me-2"><img src={process.env.PUBLIC_URL+'/img/scan.png'} /></div> Paraphraser</li>
                        <div className="sep-navbar"></div>
                        <li className="bg-white-item  mt-3"><div className="group-li-fqa me-2 "><img src={process.env.PUBLIC_URL+'/img/chrome.png'} /></div>  Add to Chrome</li>
                        <li className="bg-white-item  my-3"><div className="group-li-fqa me-2" ><img src={process.env.PUBLIC_URL+'/img/word.png'} /></div>Add To Word</li>
                    </ul>
                </div>
                <div className="list-fqa">
                    <ul>
                        <div className="d-flex align-items-center">

                        <li className="group-li-fqa"><div><img src={process.env.PUBLIC_URL+'/img/message.png'} /></div></li>
                        <p className="text-green ms-2">Contact Us</p>
                        </div>
                    </ul>
                </div>
                    </div>
                </div>
                
            </div>
        </>
    )

}

export default Sidebar;