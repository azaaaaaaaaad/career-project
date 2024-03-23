import { TfiLocationPin } from "react-icons/tfi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (

        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-primary mr-4 text-primary">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-primary mr-4 text-primary">{job_type}</button>
                </div>
                <div className="flex gap-6 text-xl">
                    <h2 className="flex items-center gap-2"><TfiLocationPin className="text-primary"></TfiLocationPin>{location}</h2>
                    <h2 className="flex items-center gap-2"><RiMoneyDollarCircleLine className="text-primary"></RiMoneyDollarCircleLine>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary font-extrabold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Job;