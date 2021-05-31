import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import UserModal from './UserModal';

function Header(props) {

    const { addNewUser, count } = props;

    const [ open, setOpen ] = useState(false)

    const openModal = () => { setOpen(true) };

    const closeModal = () => { setOpen(false) };

    return(
        <>
            <div className="app-header">        
                <h1>User Manager ({count})</h1>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={openModal}
                >
                    Agregar
                </Button>
            </div>
            <UserModal
                isOpen={open}
                close={closeModal}
                addNewUser={addNewUser}
            />
        </>
    );

}
export default Header;