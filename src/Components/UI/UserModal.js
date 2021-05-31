import React, { useState } from 'react';
import { Button, Modal, TextField, FormControlLabel, Checkbox } from '@material-ui/core';

function UserModal(props) {

    const { isOpen, close, addNewUser } = props;

    const [ name, setName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ image, setImage ] = useState("");
    const [ active, setActive ] = useState(false);

    const handleName = (e) => setName(e.target.value);
    const handleLast = (e) => setLastName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleActive = (e) => setActive(e.target.checked);

    const addUser = () => {
        const newUser = {
            name: name,
            lastname: lastname,
            email: email,
            picture: image,
            isActive: active
        };
        addNewUser(newUser);
        clean();
    };

    const clean = () => {
        setName("");
        setLastName("");
        setEmail("");
        setImage("");
        setActive(false);
        close();
    };

    return(
        <>
            <Modal
                open={isOpen}
                onClose={close}
            >
                <div className="add-user-modal">
                    <h1>Agregar Usuario</h1>
                    <div>
                    <TextField
                        className="user-modal-input"
                        variant="outlined" 
                        label="first name"
                        value={name}
                        onChange={handleName}
                    />
                    <TextField
                        className="user-modal-input"
                        variant="outlined"
                        label="last name"
                        value={lastname}
                        onChange={handleLast}
                    />
                    <TextField
                        className="user-modal-input"
                        variant="outlined"
                        label="email"
                        value={email}
                        onChange={handleEmail}
                    />
                    <TextField
                        className="user-modal-input"
                        variant="outlined"
                        label="image URL"
                        value={image}
                        onChange={handleImage}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={active}
                            onChange={handleActive}
                            name="state"
                            color="primary"
                        />
                        }
                        label={active ? "Conectado" : "Desconectado"}
                    />
                    </div>

                    <div className="actions">
                        <Button color="primary" onClick={addUser}>Agregar</Button>
                        <Button onClick={clean} >Cerrar</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default UserModal;