import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Profile from "../../components/profile/profile";
import AiSec from "../../components/profile/profile-ai";
import Summar from "../../components/profile/profile-sum";
import SidebarTo from "../../components/sidebar-right/side";
import './style.css'
const AiWriter = () =>{

    return (
        <>
            <div className="d-flex">
                <SidebarTo></SidebarTo>
                <div className="width-profile-sec">
                    <Header></Header>
                    <AiSec></AiSec>
                </div>
                

            </div>
            <Footer></Footer>
        </>
    )

}

export default AiWriter;