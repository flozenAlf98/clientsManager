import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserList from './Components/Users/UserList';
import ErrorView from './Components/UI/ErrorView';
import UserProfile from './Components/Users/UserProfile';
import { getData } from './services';


function App() {

  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filters);
  
  useEffect( () => {

    getData(dispatch, currentFilter);
  // eslint-disable-next-line
  }, []);

  return (
    <>
    <Router>

      <Switch>

        <Route exact path="/">
          <UserList />
        </Route>

        <Route exact path="/usernotfound">
          <ErrorView />
        </Route>

        <Route exact path="/userprofile/:id">
          <UserProfile />
        </Route>
        
      </Switch>

    </Router>
      
    </>
  );
}

export default App;
