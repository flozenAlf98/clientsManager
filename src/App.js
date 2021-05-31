import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './Components/UI/Header';
import UserList from './Components/Users/UserList';

const mockUsers = [
  {
      id: 1,
      name: "Clara",
      lastname: "Oswald",
      email: "calra_oswin@hotmail.com",
      picture: 'http://s3.narvii.com/image/kb75hqre7ln4bim7ieeyid6kkoapdvra_00.jpg',
      isActive: true
  },
  {
      id: 2,
      name: "Rory",
      lastname: "Williams",
      email: "iamrory@gmail.com",
      picture: 'https://pbs.twimg.com/profile_images/3515743372/9f35ec8c9701dc5f1e643fe04c0083ea_400x400.png',
      isActive: true
  },
  {
      id: 3,
      name: "Amy",
      lastname: "Pond",
      email: "amypond@yahoo.com",
      picture: 'https://pm1.narvii.com/5837/7a02e83708994984304568425246edb6a7f0bd94_hq.jpg',
      isActive: false
  },
  {
      id: 4,
      name: "Rose",
      lastname: "Tyler",
      email: "white_wolf@gmail.com",
      picture: 'https://www.doctorwhotv.co.uk/wp-content/uploads/rose-doomsday-died-opener-570x333.jpg',
      isActive: true
  }
];

const endPoint = 'http://localhost:3001/users';

function App() {

  const [ users, setUsers ] = useState([]);

  useEffect( () => {
    getData();
  }, []);

  const getData = () => {
    axios.get(endPoint)
    .then(resp => {
        setUsers(resp.data)
    }).catch(error => {
        setUsers(mockUsers);
    });
  };

  const handleNewUser = (data) => {

    axios.post(endPoint, data)
    .then(resp => {
      
      if(resp.status === 201){
        setUsers([...users, resp.data])
      }

    });

    //TODO: Error, regresar validación del Formulario
    
  };

  const handleDeleteUser = (index) => {
    
    axios.delete(endPoint + `/${users[index].id}`)
    .then( resp => {

      if( resp.status === 200){
        let aux = Object.assign([], users);
        aux.splice(index, 1);
        setUsers(aux)
      }

    });

    //TODO: acciones a tomer si no se puede borrar.

  };

  const handleUserStatus = (index) => {

    let aux = Object.assign([], users);
    aux[index].isActive = !aux[index].isActive;

    axios.put(endPoint + `/${users[index].id}`, aux[index])
    .then(resp => {

      if( resp.status === 200 ){
        setUsers(aux);
      }

    });

    //TODO: Acciones a tomar si no se permite cambiar el status

  };

  return (
    <>
    
      <Header
        addNewUser={handleNewUser}
        count={users.length}
      />

      <UserList
        userData={users}
        deleteUser={handleDeleteUser}
        changeStatus={handleUserStatus}
      />
      
    </>
  );
}

export default App;
