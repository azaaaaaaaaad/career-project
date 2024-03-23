import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job);



    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('you have applied successfully');
    }
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Here</h2>
                    <h2><span className="font-bold">Job Details of:</span> {job.job_title}</h2>
                    <p> <span className="font-bold">Company: </span>{job.company_name}</p>
                    <p><span className="font-bold">Job Description:</span> <br />{job.job_description}</p>
                    <p><span className="font-bold">Job Responsibility:</span> <br />{job.job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span> <br />{job.educational_requirements}</p>
                    <p> <span className="font-bold">Job Experience:</span> <br />{job.experiences}</p>

                </div>
                <div className="border">
                    <h2 className="text-2xl font-bold">Side Things</h2>
                    <h2> <span className="font-bold">Salary: </span>{job.salary}</h2>
                    <h2> <span className="font-bold">Job Title: </span>{job.job_title}</h2>
                    <hr />
                    <h1 className="font-bold">Contact Information</h1>
                    <h2>Phone: {job.contact_information.phone}</h2>
                    <h2>Email: {job.contact_information.email}</h2>
                    <h2>Address: {job.contact_information.address}</h2>



                    <button onClick={handleApplyJob} className="btn-primary bg-primary rounded w-full p-2">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;