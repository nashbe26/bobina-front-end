import axios from "axios"; 

const instance = axios.create({
    baseURL : 'http://localhost:3005/api/v1',
    headers: {
        Authorization:"Bearer " +localStorage.getItem("token") || "",
        ContentType: "application/json",
      }, 
  

});

export default instance;