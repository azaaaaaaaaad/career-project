import { useEffect, useState } from "react";
import Job from "./Job";
import { data } from "autoprefixer";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    //this is not the best way to show all data
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">Featured Jobs : {jobs.length}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore tenetur, quia quisquam officia tempora eius. Consequuntur id repudiandae odio molestias soluta! Hic nobis dicta quia rem inventore nesciunt odio?</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job =>
                        <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length ?'hidden' : ''}>
                <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary font-bold mx-4 my-2">See All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;