import instance from "../axios/instance";

async function register  (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "auth/register",
        method: "post",
        data:data
      })
    

    return res.data;

}

async function login  (data){
    
    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "auth/login",
        method: "post",
        data:data
      })
    

    return res.data;

}

async function updateUserImage  (data){
    console.log(data);
    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "user/updateUserImage",
        method: "put",
        data:data.formData
      })
    

    return res.data;

}


async function updateUser  (data){
    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "user/updateUserData",
        method: "put",
        data:data
      })
    

    return res.data;

}
async function getUserProfile  (data){
   
    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "user/getUser",
        method: "get"
        })
    

    return res.data;

}

export {

    register,
    login,
    updateUser,
    getUserProfile,
    updateUserImage
};


