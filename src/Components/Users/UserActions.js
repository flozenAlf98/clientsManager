import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

const UserActions = (props) => {

    const { isActive, handleState, handleDelete } = props;

    return (
    <>
        <div className="right-side">
            { isActive ?
                <Tooltip title="desactivar">
                    <IconButton onClick={handleState} >
                        <Close></Close>
                    </IconButton>
                </Tooltip> :
                <Tooltip title="activar">
                    <IconButton onClick={handleState} > 
                        <Done></Done>
                    </IconButton>
                </Tooltip>
            }

            <Tooltip title="eliminar">
                <IconButton onClick={handleDelete}>
                    <Delete></Delete>
                </IconButton>
            </Tooltip>

        </div>
    </>);
}
 
export default UserActions;