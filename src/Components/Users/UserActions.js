import React from 'react';

import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';

const UserActions = ({ isActive, deleteHandler, statusHandler, editHandler }) => {

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
                        <Done />
                    </IconButton>
                </Tooltip>
            }

            <Tooltip title="editar">
                <IconButton onClick={editHandler}>
                    <EditIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="eliminar">
                <IconButton onClick={deleteHandler}>
                    <Delete />
                </IconButton>
            </Tooltip>

        </div>
    </>);
}
 
export default UserActions;