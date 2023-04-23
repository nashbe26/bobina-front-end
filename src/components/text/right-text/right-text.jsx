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
        <div className="box-text-container">

            <div className="typed-text-box pt-5 pb-3">
                {status != "succeeded" && status != "fetching" ?<p className="typed-text">Your rewritten text...</p> 
                :
                <>

                {status == "fetching" ? 
                <div className="d-flex justify-content-center align-items-center">

                    <div class="loader"></div>
                </div>
                 : 
                 <p className="typed-text" id="ready-to-copy" > {text?.original}</p>


                }
                </>

                }
                
            </div>
            <div className="button-section">
                <div className="button-box-right">
                    <div className="button-not-available">
                      
                <img src={process.env.PUBLIC_URL+'/img/refresh.png'} alt=''/>
   
                   
                        
                    </div>
                    {text?.original ? 
                        <CopyToClipboard text={text?.original}
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