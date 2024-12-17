import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstant = axios.create({
  baseURL: "https://job-portal-server-for-recruiter-part3-beta.vercel.app",
  withCredentials: true,
});

const useAxioSecure = () => {

    const {signOutUser} = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{
        axiosInstant.interceptors.response.use((response)=>{
            return response;
        },(err)=>{
            if(err.response.status === 401 || err.response.status === 403){
                signOutUser()
                .then(()=>{
                    navigate('/signIn')
                })
                .catch(err=> console.log(err, 'When sign out from protected route'))
            }
            return Promise.reject(err);
        })
    },[])

  return axiosInstant;
};

export default useAxioSecure;
