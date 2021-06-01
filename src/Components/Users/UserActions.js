import React from 'react';

import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

const UserActions = ({ isActive, deleteHandler, statusHandler }) => {

    return (
    <>
        <div className="right-side">
            { isActive ?
                <Tooltip title="desactivar">
                    <IconButton onClick={statusHandler} >
                        <Close></Close>
                    </IconButton>
                </Tooltip> :
                <Tooltip title="activar">
                    <IconButton onClick={statusHandler} > 
                        <Done></Done>
                    </IconButton>
                </Tooltip>
            }

            <Tooltip title="eliminar">
                <IconButton onClick={deleteHandler}>
                    <Delete></Delete>
                </IconButton>
            </Tooltip>

        </div>
    </>);
}
 
export default UserActions;