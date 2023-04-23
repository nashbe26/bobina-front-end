import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUserProfile, updateUserImage } from "../../api/user.api";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SidebarTo from "../../components/sidebar-right/side";
import './style.css';



const SettingsProfile=()=>{

    const hiddenWidthRef = useRef(null)
    const shownWidthRef = useRef(null)

    const [arrayImage,setArrayImageProd]=useState(null)

    function swipeRight(){
    
        hiddenWidthRef.current.style.display='none'
        shownWidthRef.current.style.display='block'
    }

    function swipeLeft(){
        
        hiddenWidthRef.current.style.display='block'
        shownWidthRef.current.style.display='none'

    }

    const handleChangeImage = (event) =>{
        console.log(event.target.files);
        let urlImage = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();

        formData.append('file',event.target.files[0])
        updateUserImageMutation.mutate({formData})
       
    } 


    const updateUserImageMutation = useMutation(updateUserImage,{
        onSuccess:(data) =>{
            refetch()
        },
        onError:(err)=>{
            console.log(err);
        }
    })

    const {isLoading,data,isError,isFetching,refetch} = useQuery({
        queryKey:['rewritse'],  
        queryFn : async ()=>{
        const datas = await getUserProfile();
        return datas;
    
},  refetchOnWindowFocus: false,enabled:true})

useEffect(()=>{
    setArrayImageProd(data?.picture)

},[data])

    return(
        <>
        
        <div className="d-flex">
            <SidebarTo></SidebarTo>
                <div className="width-profile-sec">
                    <Header></Header>
                    <div className="profile-container-box pb-5">
                        <div className="width-profile-text-container-settings" style={{width:"100%!important"}}>
                            <div className="card-green-user-data">
                                <div className="text-center">
                                    <div className="">
                                        <img src={"http://localhost:3005/public/images/"+arrayImage}  alt="" style={{width:"100px",height:"100px",borderRadius:"50%"}} />
                                    </div>
                                    <div className="user-setting-name">
                                        <p>{data?.name}</p>
                                    </div>
                                    <div className="user-setting-email">
                                        <p>{data?.email}</p>
                                    </div>
                                    <div className="user-setting-btn">
                                        <input type="file" id="actual-btn" onChange={handleChangeImage} hidden/>
                                        <label className="edit-profile-btn" for="actual-btn">Change image</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-grey-user-data">
                                <div className="profile-card-image">
                                    <p className="user-text-profile-te-set">Profile</p>
                                </div>
                                <div className="box-sep-settings"></div>
                                <div className="data-about-user-settings mb-5 mt-4">
                                    <p className="desc-settings-el my-3">Name</p>
                                    <p className="data-settigns-el">{data?.name}</p>
                                </div>
                                <div className="data-about-user-settings" style={{margin:"2rem 0"}}>
                                    <p className="desc-settings-el my-3">Email</p>
                                    <p className="data-settigns-el">{data?.email}</p>
                                </div>
                                <div className="data-about-user-settings" style={{margin:"2rem 0"}}>
                                    <p className="desc-settings-el my-3">Username</p>
                                    <p className="data-settigns-el">{data?.username}</p>
                                </div>
                                <div className="data-about-user-settings" style={{margin:"2rem 0"}}>
                                    <p className="desc-settings-el my-3">Notification</p>
                                    <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        <Footer></Footer>
        </>
    )

}

export default SettingsProfile;