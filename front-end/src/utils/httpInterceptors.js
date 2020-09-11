import axios from "axios"
axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})
 axios.defaults.baseURL=process.env.REACT_APP_BASE_URL
 axios.interceptors.request.use(config =>{
const token=localStorage.getItem("token")
if(token){
  config.headers.common['Authorization']=`Bearer ${localStorage.getItem("token")}`
}
return config

},(err)=>{
  console.log("error is ",err)
    return Promise.reject(err) 
})

export default axios