import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layout/MainLayouts";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Faculty from "./Pages/Faculty/Faculty";
import Program from "./Pages/Program/Program";
import Notice from "./Pages/Notice/Notice";
import Apply from "./Pages/Apply/Apply";
import Authentication from "./Pages/Authentication/Authentication";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Blog from "./Pages/Blog/Blog";
import Application from "./Pages/Aplication/Application";
import StartApplication from "./Pages/Aplication/StartApplication";
import RequireAuth from "./Components/RequireAuth";
import ApplicationStatus from "./Pages/Aplication/ApplicationStatus";
import NewApplication from "./Pages/Aplication/NewApplication";
import RequiredDocuments from "./Pages/Aplication/RequiredDocuments";
import AdminLayouts from "./Layout/AdminLayouts";
import Dashboard from "./Components/AdminPanel/Dashboard/Dashboard";
import Payments from "./Pages/Aplication/Payments";
import PreApplicants from "./Pages/Admin/PreApplicants/PreApplicants";
import WaitingApplicant from "./Pages/Admin/WaitingApplicant/WaitingApplicant";
import Applicants from "./Pages/Admin/Applicants/Applicants";
import ApprovedApplicants from "./Pages/Admin/ApprovedApplicants/ApprovedApplicants";
import IndividualApplicant from "./Pages/Admin/IndividualApplicant/IndividualApplicant";
import PaidApplicants from "./Pages/Admin/PaidApplicants/PaidApplicants";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <AboutUs /> },
            { path: "/faculty", element: <Faculty /> },
            { path: "/program", element: <Program /> },
            { path: "/notice", element: <Notice /> },
            { path: "/blog", element: <Blog /> },
            { path: "/contact", element: <Contact /> },
            { path: "/apply", element: <Apply /> },
            { path: "/authentication", element: <Authentication /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/application", element: <RequireAuth><Application /></RequireAuth> },
            { path: "/startApplication", element: <RequireAuth><StartApplication /></RequireAuth> },
            { path: "/applicationStatus", element: <RequireAuth><ApplicationStatus /></RequireAuth> },
            { path: "/newApplication", element: <RequireAuth><NewApplication /></RequireAuth> },
            { path: "/requiredDocuments", element: <RequireAuth><RequiredDocuments /></RequireAuth> },
            { path: "/payments", element: <RequireAuth><Payments /></RequireAuth> }
        ],
    },
    {
        path: "/admin",
        element: <AdminLayouts />,
        children: [
            { path: "/admin/dashboard", element: <Dashboard /> },
            { path: "/admin/pre-applicants", element: <PreApplicants /> },
            { path: "/admin/waiting-applicant", element: <WaitingApplicant /> },
            { path: "/admin/applicants", element: <Applicants /> },
            { path: "/admin/approved-applicants", element: <ApprovedApplicants /> },
            { path: "/admin/applicants/:id", element: <IndividualApplicant /> },
            { path: "/admin/approved-applicants/:id", element: <IndividualApplicant /> },
            { path: "/admin/paid-applicants", element: <PaidApplicants /> }
        ],
    }
]);

export default router;