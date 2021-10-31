import './style.css';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from "react-router-dom";
import React from 'react';


export default function ImputLogin() {

    const { logar } = useAuth();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await logar(event.target[0].value, event.target[1].value);
        result ? history.push('/profile') : history.push('/login');
    }

    return (
        <>
            <form name="form" onSubmit={handleSubmit}>
                <label>
                    Usuário:
                    <input type="text" name="usuario" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
}