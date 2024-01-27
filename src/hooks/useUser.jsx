import { useEffect, useState } from "react";


const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await response.json();

                setUser(content);
            }
        )()
    }, [user]);

    return [user, setUser];
};

export default useUser;