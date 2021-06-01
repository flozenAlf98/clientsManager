import React from 'react';
import { useDispatch } from 'react-redux';

import { Paper, Avatar } from '@material-ui/core';

import UserActions from './UserActions';
import { deleteUser, updateUser } from '../../services';

const User = (props) => {
    
    const { id, name, lastname, email, picture, isActive } = props.data;

    const dispatch = useDispatch();

    const deleteUserHandler = () => {
    
        deleteUser(dispatch, id);
    
        //TODO: acciones a tomar si no se puede borrar.
    
    };

    const userStatusHandler = () => {

        let aux = props.data;
        aux.isActive = !isActive;
    
       updateUser(dispatch, aux);
    
        //TODO: Acciones a tomar si no se permite cambiar el status
    
    };
 
    return(
        <>
            <Paper className="user-row" elevation={3}>

                <div className="left-side">

                    <Avatar className={ isActive ? "user-pic-active" : "user-pic-inactive"} src={picture} ></Avatar>

                    <div className="user-name-container">

                        <span className="user-name">{ name } </span>
                        <span className="user-lastname">{ lastname }</span>
                        <span className="user-email">{' ( ' + email + ' )' }</span>

                    </div>

                </div>

                <UserActions
                    isActive={isActive}
                    statusHandler={userStatusHandler}
                    deleteHandler={deleteUserHandler}
                />

            </Paper>
        </>
    );
};

export default User;