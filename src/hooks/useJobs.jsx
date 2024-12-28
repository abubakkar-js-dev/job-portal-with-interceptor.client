import  { useState,useEffect } from 'react';
import axios from 'axios';

const useJobs = (sort) => {

    const [allJobs,setAllJobs] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        axios.get(`https://job-portal-server-for-recruiter-part3-beta.vercel.app/jobs?sort=${sort}`)
        .then(res=>{
            setAllJobs(res.data);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
        })
    },[sort])
    return {allJobs,loading};
};

export default useJobs;