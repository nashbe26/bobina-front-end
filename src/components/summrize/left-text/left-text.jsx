import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aiTinqSum, aiWriter, rewriterTinqAi} from "../../../api/rewriter.api";
import { setToken } from "../../../redux/loggedSlice";
import { fetchLang } from "../../../redux/modeSlice";
import { isRewriteLoading, rewriteData, setModePrem, setPremPack } from "../../../redux/rewriteLoadingSlice";
import '../style.css'


const LeftBoxText = () =>{

    const [typed,setTyped] = useState('')
    const [finalText,setfinalText] = useState('')
    const [errPrem,setErrorPrem] = useState(false);

    let {mode} = useSelector(state => state.modeState) ;
    let dispatch = useDispatch()
   
    const [lang,setlang] = useState(null)
    useEffect(()=>{
            dispatch(fetchLang(lang))
        },[lang])
        const {isLoading,data,isError,isFetching,refetch} = useQuery({
            queryKey:['rewrite'],  
            queryFn : async ()=>{
            if(mode){
                dispatch(isRewriteLoading("fetching"));
                const datas = await aiTinqSum({text:typed,mode,lang});
    
                dispatch(isRewriteLoading("succeeded"));
                dispatch(rewriteData(datas));
    
                return datas;
            }else{
                alert('missing alert mode')
            }

            

    },  refetchOnWindowFocus: false,enabled:false})

    let token = localStorage.getItem('token')

    function fectchResponse(){
        if(token){
            refetch()
            dispatch(setModePrem(false))
        }else if(!token && mode != "neutral"){
            console.log(mode);
            dispatch(setModePrem(true))
        }else if(!token && mode == "neutral"){
            console.log(mode);
            refetch()
            dispatch(setModePrem(false))
        }
    }

    useEffect(()=>{
        if(!token){
            if(typed.length<=100){
                setfinalText(typed)
    
                dispatch(setPremPack(false))
            }else{
                dispatch(setPremPack(true))
            }
        }else{
            if(typed.length<=2000){
                setfinalText(typed)
    
            }
        }

    },[typed])


    useEffect(()=>{

    },[mode])

    
    return(
        <div className="box-text-container">
            <div className="typed-text-box pt-5 pb-3">
                
                <textarea className="typed-text" onChange={e => setTyped(e.target.value) } value={finalText} placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard" >
                </textarea>
               
                
            </div>
            {
                typed?.length == 0 ? 
                <div className="img-pos">
                    <img src={process.env.PUBLIC_URL+"/img/paste.png"} alt="" />
                </div>
                :
                <></>

            }
            
            <div className="button-section">
                <div className="button-box">
                    <select name="" className="select-lang" onChange={e => setlang(e.target.value)}>
                        <option value="english" ><span style={{color:"rgba(14, 36, 58, 0.26)!important"}}>Language :</span> English</option>
                        <option value="french"><span style={{color:"rgba(14, 36, 58, 0.26)!important"}}>Language :</span> French</option>
                        <option value="spanish"><span style={{color:"rgba(14, 36, 58, 0.26)!important"}}>Language :</span> Spanish </option>
                        <option value="portuguese"><span style={{color:"rgba(14, 36, 58, 0.26)!important"}}>Language :</span> Portuguese</option>
                        <option value="arabic"><span style={{color:"rgba(14, 36, 58, 0.26)!important"}}>Language :</span> Arabic</option>
                        <option value="turkish"><span style={{color:"rgba(14, 36, 58, 0.26)!important"}}>Language :</span> Turkish</option>
                    </select>
                    <div className="">
                        {token ?  <p>{finalText.length}/2000</p> : <p>{finalText.length}/100</p> }
                    </div>
                    <button className="rewrite-text" onClick={fectchResponse}>
                        Summarize
                    </button>
                </div>
            </div>
        </div>
    )

}

export default LeftBoxText;