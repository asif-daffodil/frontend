import { useEffect, useState } from "react";
import { checkAuth } from "./checkAuth";
import axios from "axios";
import useJwt from "./useJwt";


const useUser = () => {
    const [user, setUser] = useState(null);
    const jwt = useJwt();

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('https://api.smubd.org/api/user', {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
                );
                setUser(response.data);
                checkAuth.value = true;
            }
        )()
    }, []);

    return [user, setUser];
};

export default useUser;