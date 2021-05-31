import React from 'react';
import { Paper, Avatar } from '@material-ui/core';
import UserActions from './UserActions';

const User = (props) => {
    
    const { name, lastname, email, picture, isActive } = props.data;

    const handleState = () => { props.status() };

    const handleDelete = () => { props.delete() };
 
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
                    handleState={handleState} 
                    handleDelete={handleDelete}
                />

            </Paper>
        </>
    );
};

export default User;