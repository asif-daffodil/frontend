import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const useJwt = () => {
    const [jwt, setJwt] = useState(null);

    useEffect(() => {
        setJwt(Cookies.get('jwt') ?? null);
    }, [])

    return jwt;
};

export default useJwt;