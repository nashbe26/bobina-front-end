import React from "react";
import AboutAi from "../../components/about-ai/about-ai";
import AboutBobina from "../../components/about-bob/about-bob";
import AboutUs from "../../components/about-us/about-us";
import ManageSec from "../../components/contact-sec/contact-sec";
import ContactUs from "../../components/contact/contact";
import Feedback from "../../components/feedbacks-sec/feedback";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import IntroAiSection from "../../components/intro-ai/intro-ai";
import MilestoneSec from "../../components/milestone-sec/milestone-sec";
import OptionSec from "../../components/options-sec/option-sec";
import TextBox from "../../components/text/text";
import VocabSec from "../../components/vocab-sec/vocab-sec";
import WorkSec from "../../components/work-sec/work-sec";

const LandingPage = () =>{

    return(
        <>
            <Header></Header>
            <IntroAiSection></IntroAiSection>
            <AboutUs></AboutUs>
            <WorkSec></WorkSec>
            <AboutBobina></AboutBobina>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    )

}

export default LandingPage;