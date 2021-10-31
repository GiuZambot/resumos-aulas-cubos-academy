import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';
import './styles.css';

function UsersRegister() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const {
    userInEditing,
    setUserInEditing,
    usersData,
    setUsersData
  } = useUser();

  useEffect(() => {
    if (userInEditing) {
      setName(userInEditing.name);
      setAge(userInEditing.age);
      return;
    }

    setName('');
    setAge('');
  }, [userInEditing]);

  async function handleRegisterUser() {

    if (!name || !age) {
      return;
    }

    const lastItem = usersData.length ? usersData[usersData.length - 1].id + 1 : 1;

    setUsersData([...usersData, { id: lastItem, name: name, age: age }]);

    setName('');
    setAge('');
  }

  async function handleEditUser() {

    if (!name || !age) {
      return;
    }
    const localUsersData = [...usersData];

    const currentUser = localUsersData.find(item => item.id === userInEditing.id);

    currentUser.name = name;
    currentUser.age = age;

    setUsersData(localUsersData);

    setUserInEditing(false);
  }

  return (
    <div className="left">
      <h1>{userInEditing ? 'Editando' : 'Adicionar'} usuário</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.valueAsNumber)}
        value={age}
      />
      <button onClick={() =>
        userInEditing
          ? handleEditUser()
          : handleRegisterUser()}
      >
        {userInEditing ? 'Editar' : 'Adicionar'}
      </button>
      {userInEditing && <button onClick={() => setUserInEditing(false)}>Cancelar</button>}
    </div>
  );
}

export default UsersRegister;