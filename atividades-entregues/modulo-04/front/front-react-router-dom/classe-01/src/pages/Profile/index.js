import List from '../../components/List';
import { useHistory } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export default function Profile() {
    const history = useHistory();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        history.push('/login');
    }
    return (
        <>
            <button onClick={handleLogout}>Sair</button>
            <h1>Repositórios</h1>
            <List />
        </>
    );
}