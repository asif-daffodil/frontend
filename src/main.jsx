import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './hooks/auth';
import 'sweetalert2/dist/sweetalert2.min.css'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </QueryClientProvider>
)
