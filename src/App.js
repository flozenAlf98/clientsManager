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

function App() {

  const [ users, setUsers ] = useState([]);

  useEffect( () => {
    getData();
  }, []);

  const handleNewUser = (data) => {
    let newItem = {...data, id: users[users.length -1].id +1 }
    setUsers([...users, newItem])
  };

  const handleDeleteUser = (index) => {
    let aux = Object.assign([], users);
    aux.splice(index, 1);
    setUsers(aux)
  };

  const getData = () => {
    axios.get('http://localhost:3001/users')
    .then(resp => {
        setUsers(resp.data)
    }).catch(error => {
        setUsers(mockUsers);
    });
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
      />
      
    </>
  );
}

export default App;
