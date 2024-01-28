import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthContext from './hooks/AuthContext';
import axios from 'axios';

const queryClient = new QueryClient();

const auth = {};
(async () => await axios.get('http://localhost:8000/api/user', { withCredentials: true })
    .then(response => {
        auth.user = response.data.user;
        auth.checkAuth = true;
    })
    .catch(() => {
        auth.user = null;
        auth.checkAuth = false;
    })
)();


ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={auth}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    </QueryClientProvider>
)
