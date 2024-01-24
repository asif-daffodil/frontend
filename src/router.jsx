import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layout/MainLayouts";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Faculty from "./Pages/Faculty/Faculty";
import Program from "./Pages/Program/Program";
import Notice from "./Pages/Notice/Notice";
import Apply from "./Pages/Apply/Apply";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/faculty", element: <Faculty /> },
            { path: "/program", element: <Program /> },
            { path: "/notice", element: <Notice /> },
            { path: "/contact", element: <Contact /> },
            { path: "/contact", element: <Apply /> }
        ],
    },
]);

export default router;