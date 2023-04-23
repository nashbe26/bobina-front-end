import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SidebarTo= () =>{

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
        <div className="width-sidebar-profile">
                <div className="sidebar-profile-sec" ref={hiddenWidthRef}>
                    <div style={{paddingLeft:"1.5rem"}}>
                        <div className="mt-3">
                            <div className="list-style">
                        <ul>
                            <li style={{cursor:'pointer'}} className="group-li-green"><div><img src={process.env.PUBLIC_URL+'/img/arr.png'} onClick={swipeRight} /> </div> </li>
                            <div className="mt-5">

                                <li className="group-li-blue mt-3"><div><img src={process.env.PUBLIC_URL+'/img/ask.svg'} /></div></li>
                                <li className="group-li-red my-3"><div><img src={process.env.PUBLIC_URL+'/img/text.svg'} /></div></li>
                                <li className="group-li-yal my-3"><div><img src={process.env.PUBLIC_URL+'/img/scan.svg'} /></div></li>
                                <li className="group-li-yal my-3"><div><img src={process.env.PUBLIC_URL+'/img/ai.svg'}  /></div></li>
                            </div>
                        </ul>
                    </div>
                    <div className="list-fqa-header">
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
                            <li className="mt-3"><Link to="/rewriter" className="bg-white-item  " style={{color:"#000",textDecoration:"none"}}><div className="group-li-blue me-2 "><img src={process.env.PUBLIC_URL+'/img/ask.svg'} /></div> Rewriter</Link></li>
                            <li className=" my-3"><Link to="/summarizer" className="bg-white-item " style={{color:"#000",textDecoration:"none"}}><div className="group-li-red me-2" ><img src={process.env.PUBLIC_URL+'/img/text.svg'} /></div>Summarizer</Link></li>
                            <li className=" my-3"><Link to="/plagiarism" className="bg-white-item" style={{color:"#000",textDecoration:"none"}}><div className="group-li-yal me-2"><img src={process.env.PUBLIC_URL+'/img/scan.svg'} /></div> Plagiarism</Link></li>
                            <li className=" my-3"><Link to="/aiWriter" className="bg-white-item" style={{color:"#000",textDecoration:"none"}}><div className="group-li-yal me-2"><img src={process.env.PUBLIC_URL+'/img/ai.svg'}/></div> Write AI</Link></li>
                            <div className="sep-navbar"></div>
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
                </div>
    )

}

export default SidebarTo;