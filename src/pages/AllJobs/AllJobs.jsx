import { useState } from "react";
import LoadingSpinner from "../../common/LoadingSpinner";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";

const AllJobs = () => {
    const [sort,setSort] = useState(false);
    const {allJobs,loading} = useJobs(sort);
    console.log(allJobs);
    if(loading){
        return <LoadingSpinner />
    }
    return (
        <div>
            <h2 className='text-3xl'>All Jobs</h2>
            <div className='flex justify-end my-4'>
            <button onClick={()=>setSort(!sort)} className='btn btn-primary btn-sm ml-auto'>{sort?'Sorted':'Sort'} by Salary</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    allJobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>

    );
};

export default AllJobs;