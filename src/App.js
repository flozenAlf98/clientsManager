import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Header from './Components/UI/Header';
import UserList from './Components/Users/UserList';
import { getData } from './services';


function App() {

  const dispatch = useDispatch();

  useEffect( () => {

    getData(dispatch);
  // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <UserList />
    </>
  );
}

export default App;
