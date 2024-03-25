import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oppps !!!!!</h2>
            <NavLink to="/">Go to home page</NavLink>
        </div>
    );
};

export default ErrorPage;