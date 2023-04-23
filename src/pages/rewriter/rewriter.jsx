import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Profile from "../../components/profile/profile";
import SidebarTo from "../../components/sidebar-right/side";
import './style.css'
const ProfilePage = () =>{



    return (
        <>
            <div className="d-flex">
                <SidebarTo></SidebarTo>
                <div className="width-profile-sec">
                    <Header></Header>
                    <Profile></Profile>
                </div>
                

            </div>
            <Footer></Footer>
        </>
    )

}

export default ProfilePage;