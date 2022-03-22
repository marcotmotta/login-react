//really cool strat (custom hook)
//im actually using the useState hook normally but also including the
//storage calls

import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const token = localStorage.getItem('token');
        return token
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {

        if (!userToken) {
            localStorage.removeItem('token');
        } else {
            localStorage.setItem('token', userToken);
        }
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}