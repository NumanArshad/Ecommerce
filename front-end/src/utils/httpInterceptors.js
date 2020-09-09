import axios from "axios"
const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})
// axios.defaults.baseURL=process.env.REACT_APP_BASE_URL
axiosInstance.interceptors.request.use(config =>{

  config.headers.common['Authorization']=`Bearer ${localStorage.getItem("token")}`
  return config

},(err)=>{
  console.log("error is ",err)
    return Promise.reject(err) 
})

export default axiosInstance