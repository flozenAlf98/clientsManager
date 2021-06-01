import React from 'react';
import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../services';

import UserModal from './UserModal';

function Header() {

    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    const openModalHandler = () => {
        openModal(dispatch) 
    };

    return(
        <>
            <div className="app-header">        
                <h1>User Manager ({ users.length })</h1>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={openModalHandler}
                >
                    Agregar
                </Button>
            </div>
            <UserModal />
        </>
    );

}
export default Header;