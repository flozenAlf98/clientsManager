import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import userNotFound from '../../resources/userNotFound.svg';

const ErrorView = () => {
    return (
        <>
            <div className="error-view">

                <div className="error-message">
                    <h1>
                        Usuario no encontrado :(
                    </h1>
                </div>

                <div className="error-image">
                    <img
                        src={userNotFound}
                        alt="insertar SVG con la etiqueta"
                    />
                </div>

                <div className="error-actions">

                    <Link to="/" className="router-link" >
                        <Button variant="contained" color="primary">
                            Regresar al inicio
                        </Button>
                    </Link>
                    
                </div>
                
            </div>
        </>
    );
}
 
export default ErrorView;