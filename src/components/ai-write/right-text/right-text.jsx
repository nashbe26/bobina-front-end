import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import '../style.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const RightBoxText = () =>{

    let {text} = useSelector(state => state.rewriteStatus)
    let {status} = useSelector(state => state.rewriteStatus)

    const [copied,setcopied] = useState(false)

    useEffect(()=>{
        console.log(text);
    },[text,status])

    return(
        <div className="box-text-container-ait pt-2 pb-3 px-4" style={{background: "rgb(251,252,252)"}}>

            <div className="typed-text-box pt-5 pb-3">
                {status != "succeeded" && status != "fetching" ?<p className="typed-text">Your Ai Write text...</p> 
                :
                <>

                {status == "fetching" ? 
                <div className="d-flex justify-content-center align-items-center">

                    <div class="loader"></div>
                </div>
                 : 
                 <p className="typed-text" id="ready-to-copy" > {text?.output[0]}</p>


                }
                </>

                }
                
            </div>
            <div className="button-section">
                <div className="button-box-right">
                    <div className="button-not-available">
                      
                <img src={process.env.PUBLIC_URL+'/img/refresh.png'} alt=''/>
   
                   
                        
                    </div>
                    {text?.output[0] ? 
                        <CopyToClipboard text={text?.output[0]}
                        onCopy={() => setcopied(true)}>
                                              <div className="button-available">
                            <img src={process.env.PUBLIC_URL+'/img/copie.png'} alt=''/>

                        </div>
                        </CopyToClipboard> :                        
                                          <div className="button-not-available">
                                          <img src={process.env.PUBLIC_URL+'/img/copie.png'} alt=''/>
                  
                                      </div>
                        }
  
                </div>
            </div>
        </div>
    )

}

export default RightBoxText;