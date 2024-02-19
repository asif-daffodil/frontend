import { useEffect, useState } from "react";
import { checkAuth } from "./checkAuth";


const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user');

                const content = await response.json();

                setUser(content);
                checkAuth.value = true;
            }
        )()
    }, [user]);

    return [user, setUser];
};

export default useUser;