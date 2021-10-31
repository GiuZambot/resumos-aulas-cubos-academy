import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

export function useAuth() {
    return useContext(AuthContext);
}

export function useAuthProvider() {
    const [token, setToken] = useState('');

    const logar = async (user) => {
        let result = await fetch(`https://api.github.com/users/${user}`);
        console.log(result.status)
        if (result.status === 200) {
            result = await result.json()
            const data = await gerarToken(JSON.stringify(result));
            setToken(data);
            return true;
        } else {
            return false;
        }
    }

    const logout = () => {
        setToken(null);
    }

    const gerarToken = async (valor) => {
        return await btoa(valor);
    }

    return {
        token,
        logar,
        logout
    }
}