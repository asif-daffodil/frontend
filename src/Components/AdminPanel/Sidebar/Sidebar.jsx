import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="nav flex-column">
            <li>
                <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/pre-applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Pre-Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/waiting-applicant" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Waiting Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/approved-applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Approved Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/paid-applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Paid Applicants</NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;