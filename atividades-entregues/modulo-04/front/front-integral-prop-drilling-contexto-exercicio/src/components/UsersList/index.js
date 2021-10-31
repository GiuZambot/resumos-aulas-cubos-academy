import UsersIcon from '../../assets/users.svg';
import Empty from '../Empty';
import UsersReport from '../UsersReport';
import './styles.css';
import useUser from '../../hooks/useUser';

function UsersList() {
  const {
    setUserInEditing,
    usersData,
    handleDeleteUser
  } = useUser();
  return (
    <div className="right">
      {usersData.length > 0 &&
        <div className="container-lines">
          {usersData.map((user) => (
            <ul key={user.id}>
              <li className="name">
                {user.name}
              </li>
              <li>
                {user.age}
              </li>
              <li>
                <button onClick={() => setUserInEditing(user)}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
              </li>
            </ul>
          ))}
        </div>
      }
      {!usersData.length &&
        <Empty
          icon={UsersIcon}
          message="Não existem usuários cadastrados..."
          iconSize="50"
        />
      }
      <UsersReport usersData={usersData} />
    </div>
  );
}

export default UsersList;