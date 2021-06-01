import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, TextField, FormControlLabel, Checkbox } from '@material-ui/core';

import { newUser, closeModal } from '../../services';

function UserModal() {

    const [ name, setName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ image, setImage ] = useState("");
    const [ active, setActive ] = useState(false);

    const nameHandler = (e) => setName(e.target.value);
    const lastNameHandler = (e) => setLastName(e.target.value);
    const emailHandler = (e) => setEmail(e.target.value);
    const imageHandler = (e) => setImage(e.target.value);
    const statusHandler = (e) => setActive(e.target.checked);


    const isOpen = useSelector(state => state.modal);

    const dispatch = useDispatch();

    const closeModalHandler = () => {
        closeModal(dispatch)
    };

    const newUserHandler = () => {

        const userData = {
            name: name,
            lastname: lastname,
            email: email,
            picture: image,
            isActive: active
        };

        newUser(dispatch, userData);
        clean();
        
    };

    const clean = () => {
        setName("");
        setLastName("");
        setEmail("");
        setImage("");
        setActive(false);
        closeModalHandler();
    };

    return(
        <>
            <Modal
                open={isOpen}
                onClose={closeModalHandler}
            >
                <div className="add-user-modal">
                    <h1>Agregar Usuario</h1>
                    <div>
                    <TextField
                        className="user-modal-input"
                        variant="outlined" 
                        label="first name"
                        value={name}
                        onChange={nameHandler}
                    />
                    <TextField
                        className="user-modal-input"
                        variant="outlined"
                        label="last name"
                        value={lastname}
                        onChange={lastNameHandler}
                    />
                    <TextField
                        className="user-modal-input"
                        variant="outlined"
                        label="email"
                        value={email}
                        onChange={emailHandler}
                    />
                    <TextField
                        className="user-modal-input"
                        variant="outlined"
                        label="image URL"
                        value={image}
                        onChange={imageHandler}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={active}
                            onChange={statusHandler}
                            name="state"
                            color="primary"
                        />
                        }
                        label={active ? "Conectado" : "Desconectado"}
                    />
                    </div>

                    <div className="actions">
                        <Button color="primary" onClick={newUserHandler}>Agregar</Button>
                        <Button onClick={clean} >Cerrar</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default UserModal;