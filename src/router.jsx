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
            { path: "/newApplication", element: <RequireAuth><NewApplication /></RequireAuth>},
            { path: "/requiredDocuments", element: <RequireAuth><RequiredDocuments /></RequireAuth>}
        ],
    },
]);

export default router;