import React from "react";
import './style.css';

const Footer = () =>{

    return(
        <>
            <div className="footer-sec-box">
                <div className=" row justify-content-around ">
                    <div className="pos-tect-pa p-0 m-0">
                        <img src={process.env.PUBLIC_URL+'/img/ovalCopy.png'} className=""/>
                    </div>

                    <div className="footer-container ">
                        <div className="row  align-items-center pb-5" >
                            <div className="col-5">
                                <div className="about-comp">
                                    <div className="img-sec">
                                        <img src={process.env.PUBLIC_URL + '/img/LOGO WHITE.png'} />
                                    </div>
                                    <div className="text-box-comp">
                                        <p className="text-compfooter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                    </div>
                                    <div className="">
                                        <button className="ask-btn-footer">Ask Question</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 ">
                                <div className="row">
                                    <div className="col-4">

                                        <div className="Title">
                                            <p className="text-compfooter">Bobina</p>
                                            <ul className="pt-3">
                                                <li  className="items-footer-list">Blog</li>
                                                <li  className="items-footer-list">Term of Use</li>
                                                <li  className="items-footer-list">Privacy Policy</li>
                                                <li  className="items-footer-list">Contact</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-4">

                                        <div className="Title">
                                            <p className="text-compfooter">Useful Links</p>
                                            <ul className="pt-3">
                                                <li  className="items-footer-list">QR-Codemaster</li>
                                                <li  className="items-footer-list">Text Designer</li>
                                                <li  className="items-footer-list">Password Daddy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                        <div className="Title">
                                            <p className="text-compfooter">Contacts</p>
                                            <div className="pt-3">
                                                <p  className="items-footer-list-white">Feel free to get in touch with us via phone or send us a message.</p>

                                            </div>
                                            <div className=" pt-2">
                                                <p className="items-footer-list-green">+1-123-456-7891</p>
                                                <p className="items-footer-list-green">nfo@bobina.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-bot">
                        <div className="spearator-box"></div>
                            <div className="d-flex justify-content-between py-3">
                                <div className="copywrite-text">
                                    <p>© DPI_MEDIA, All Rights Reserved</p>
                                </div>
                                <div className="d-flex">
                                    <div className="ms-2">
                                        <img src={process.env.PUBLIC_URL + '/img/tw.png'} alt=""/>
                                    </div>
                                    <div className="ms-2">
                                        <img src={process.env.PUBLIC_URL + '/img/fb.png'} alt=""/>
                                    </div>
                                    <div className="ms-2">
                                        <img src={process.env.PUBLIC_URL + '/img/gl.png'} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="footer-mobile-sec">
                <div className="width-mob-footer">
                    <div className="row">
                    <div className="col-12">
                                    <div className="about-comp">
                                        <div className="img-sec">
                                            <img src={process.env.PUBLIC_URL + '/img/logo-footer.png'} />
                                        </div>
                                        <div className="text-box-comp">
                                            <p className="text-compfooter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                        </div>
                                        <div className="">
                                            <button className="ask-btn-footer">Ask Question</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="Title">
                                        <p className="text-compfooter">Word Spinner</p>
                                        <ul className="pt-3">
                                            <li  className="items-footer-list">Blog</li>
                                            <li  className="items-footer-list">Term of Use</li>
                                            <li  className="items-footer-list">Privacy Policy</li>
                                            <li  className="items-footer-list">Contact</li>
                                        </ul>
                                    </div>
                                    </div>

                                    <div className="col-12">

                                    <div className="Title">
                                        <p className="text-compfooter">Word Spinner</p>
                                        <ul className="pt-3">
                                            <li  className="items-footer-list">QR-Codemaster</li>
                                            <li  className="items-footer-list">Text Designer</li>
                                            <li  className="items-footer-list">Password Daddy</li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-12">

                                    <div className="Title">
                                        <p className="text-compfooter">Contacts</p>
                                        <div className="pt-3">
                                            <p  className="items-footer-list-white">Feel free to get in touch with us via phone or send us a message.</p>

                                        </div>
                                        <div className=" pt-2">
                                            <p className="items-footer-list-green">+1-123-456-7891</p>
                                            <p className="items-footer-list-green">nfo@bobina.com</p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="post-bot">
                            <div className="spearator-box"></div>
                                <div className="text-center py-3">
                                
                                <div className="d-flex justify-content-center">
                                        <div className="ms-2">
                                            <img src={process.env.PUBLIC_URL + '/img/tw.png'} alt=""/>
                                        </div>
                                        <div className="ms-2">
                                            <img src={process.env.PUBLIC_URL + '/img/fb.png'} alt=""/>
                                        </div>
                                        <div className="ms-2">
                                            <img src={process.env.PUBLIC_URL + '/img/gl.png'} alt=""/>
                                        </div>
                                    </div>
                                    <div className="copywrite-text">
                                        <p>© DPI_MEDIA, All Rights Reserved</p>
                                    </div>
                                    <div className="pos-tect-pa p-0 m-0">
                        <img src={process.env.PUBLIC_URL+'/img/ovalCopy.png'} className=""/>
                    </div>
                                </div>
                    </div>    
                    </div>
                </div>
               
            </div>
        </>
    )

}

export default Footer;