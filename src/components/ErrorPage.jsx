import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Kire Bhul Koros Ken</h2>
            <Link to={"/"}> go back</Link>
        </div>
    );
};

export default ErrorPage;