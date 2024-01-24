import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
