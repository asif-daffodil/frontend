import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const jwt = Cookies.get('jwt');

    useState(() => {
        axios.get('https://api.smubd.org/api/user', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(response => setUser([response.data])).catch(() => { Cookies.remove('jwt'); setUser([]) });
    }, [jwt]);

    const login = (user) => {
        setUser([user]);
    };

    const logout = () => {
        setUser([]);
        Cookies.remove('jwt');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
