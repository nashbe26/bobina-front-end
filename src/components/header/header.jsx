import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../api/user.api";
import { setToken } from "../../redux/loggedSlice";
import './style.css'
const Header = () =>{

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

    function singout(){
        localStorage.removeItem('token')
        window.location.href='/'
    }

    let dispatch = useDispatch()
    
    let token = localStorage.getItem('token')

    const {isLoading,data,isError,isFetching,refetch} = useQuery({
        queryKey:['rewritse'],  
        queryFn : async ()=>{
        const datas = await getUserProfile();
        return datas;
    
},  refetchOnWindowFocus: false,enabled:true})

useEffect(()=>{
    console.log(data);
},[data])
    

    return(
        <div className="Header-sec">
            <div className="navar-header">
                <div className="d-flex justify-content-center py-4">
                    <div className="header-container">
                        <div className="logo-sec">
                            <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt="" className="log-nav-img" />
                        </div>
                        <div className="info-sec">
                            {
                                !token  ?
                                
                                <div className="d-flex align-items-center">
  
                                    <div className="up-input mt-4 d-blcok">
                                        <Link to='/register' className="up-btn-nav" >Get started</Link>
                                    </div>

                                </div> : 
                                <div className="d-flex align-items-center">
   
                                <div className="up-input me-3 d-blcok">
                                    <div className="">

                                    <img src={process.env.PUBLIC_URL+'/img/Shapenot.png'} alt=""  />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                <img src={"http://localhost:3005/public/images/"+data?.picture} alt="" className="user-profile-img" />
                                    <div class="dropdown">
                                        <button class="ms-2 dropdown-toggle" style={{background:"transparent",border:"none",outline:"none",textTransform:"capitalize",color:"#0E243A"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {data?.username}
                                        </button>
                                        <ul class="dropdown-menu mt-3 p-0">
                                            <li className="p-3 id-list-nav"><Link to="/settings"  style={{textTransform:"capitalize",color:"#0E243A"}}>Settings</Link></li>
                                            <li className="p-3 id-list-nav"><Link onClick={singout}  to={'/'} style={{textTransform:"capitalize",color:"#0E243A"}}>Sing out</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="navar-header-mb">
                <div className="d-flex justify-content-center py-4">
                    <div className="header-container">
                    <div className="d-flex justify-content-between">
                        <div className="col-2">
                        <div className="sidebar-header" ref={hiddenWidthRef}>
                        <li style={{cursor:'pointer'}} className="group-li-green"><div><img src={process.env.PUBLIC_URL+'/img/arr.png'} onClick={swipeRight} /> </div> </li>

                
            </div>
            <div className="sidebar-header-full-width" ref={shownWidthRef}>
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
                        <div className="group-li-fqa">
                            <p onClick={singout} className="text-green ms-2" to={'/'}>Sing out</p>
                        </div>   
                    </ul>
                </div>
                    </div>
                </div>
                
            </div>
                        </div>
                        <div className="col-8 d-flex justify-content-center align-items-center">
                        <div className="logo-sec">
                            <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt="" className="log-nav-img" />
                        </div>
                        </div>
                        <div className="col-2">
                        <div className="info-sec">
                            <div className="d-flex align-items-center">
 
                                <div className="">
                                {
                                    token  ?
                                    <img src={process.env.PUBLIC_URL+'/img/userlog.png'} alt="" className="user-profile-img" />
                                    :
                                    <img src={process.env.PUBLIC_URL+'/img/user.png'} alt="" className="user-profile-img" />
                                }
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
export default Header;