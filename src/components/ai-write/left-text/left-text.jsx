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
   
    const [keyword,setKeyword]=useState('')
    const [length,setLength]=useState('')
    const [cre,setCre]=useState('')
    
    
    
    const [lang,setlang] = useState(null)
    useEffect(()=>{
            dispatch(fetchLang(lang))
        },[lang])
        const {isLoading,data,isError,isFetching,refetch} = useQuery({
            queryKey:['rewrite'],  
            queryFn : async ()=>{
            if(mode){
                dispatch(isRewriteLoading("fetching"));
                const datas = await aiWriter({text:typed,mode,lang,length,keyword,cre});
                console.log(datas);
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
        <div className="box-text-container-ait" >
                  <div className="typed-text-box-2 my-3 p-3">
                    <div className="" style={{width:"100%"}} >
                    <label for="keywords">Keywords</label>
                    <input className="typed-text py-2 " type="text"  placeholder="Enter your Keywords" onChange={e => setKeyword(e.target.value)} />
                    </div>

               

                 </div>
            <div className="typed-text-box-2 my-3 p-3"  >

                    <div style={{width:"35%"}}>
                    <label for="keywords">Length</label>
                    <input className="typed-text py-2 " type="text" placeholder="Enter your text length" onChange={e => setLength(e.target.value)}/>
                    </div>
                    <div style={{width:"65%"}}>
                    <label for="keywords">Creativity</label>
                    <input className="typed-text py-2 " type="text" placeholder="Enter your level Creatiivty (between 0 & 1) " onChange={e => setCre(e.target.value)}/>
                    </div>
            </div>
             
            <div className="typed-text-box-1 my-3 p-3" >
                <textarea className="typed-text py-4" onChange={e => setTyped(e.target.value) } value={finalText} placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard" >
                </textarea>
            </div>
            {
                typed?.length == 0 ? 
                    <div className="img-pos" style={{top:"55%"}}>
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
                        Write
                    </button>
                </div>
            </div>
        </div>
    )

}

export default LeftBoxText;