import { useEffect, useState } from "react";
import { checkAuth } from "./checkAuth";
import axios from "axios";


const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (
            async () => {
                const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwt='));

                if (jwtCookie) {
                    const jwt = jwtCookie.split('=')[1];
                    const response = await axios.get('http://localhost:8000/api/user', {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }}
                    );
                    setUser(response.data);
                    checkAuth.value = true;
                }
            
                checkAuth.value = false;
                
            }
        )()
    }, [user]);

    return [user, setUser];
};

export default useUser;