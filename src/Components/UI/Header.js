import React from 'react';
import { Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
                <h1>User Manager ({ users.length }) </h1>
                
                <Tooltip title="Agregar usuario">
                    <Fab
                        size="small"
                        color="secondary"
                        aria-label="Agregar usuario"
                        onClick={openModalHandler}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
            <UserModal />
        </>
    );

}
export default Header;