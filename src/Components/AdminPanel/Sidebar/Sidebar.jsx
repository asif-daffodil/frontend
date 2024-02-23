import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="nav flex-column">
            <li>
                <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/admin/pre-applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Pre-Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/admin/waiting-applicant" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Waiting Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/admin/applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/admin/approved-applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Approved Applicants</NavLink>
            </li>
            <li>
                <NavLink to="/admin/paid-applicants" className={({ isActive }) => isActive ? "nav-link text-white fw-bold " : "nav-link "}>Paid Applicants</NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;