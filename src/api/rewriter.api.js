import instance from "../axios/instance";

async function rewriterTinqAi  (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "writeSonic/rewriterTinqAi",
        method: "post",
        data:data
      })
    

    return res.data;

}


async function checkPlagiarism  (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "writeSonic/checkPlagiarism",
        method: "post",
        data:data
      })
    

    return res.data;

}


async function aiWriter  (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "writeSonic/aiWriter",
        method: "post",
        data:data
      })
    

    return res.data;

}


async function aiTinqSum  (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "writeSonic/aiTinqSum",
        method: "post",
        data:data
      })
    

    return res.data;

}


export {
    rewriterTinqAi,
    checkPlagiarism,
aiWriter,
aiTinqSum
};