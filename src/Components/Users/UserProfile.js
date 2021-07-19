import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

import { Grid, Card, CardContent, Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getUserById } from '../../services';

const UserProfile = () => {

    let { id } = useParams();

    const [thisUser, setThisUser] = useState({
        name: "",
        lastname: "",
        email: "",
        picture: "",
        isActive: true,
    });

    const history = useHistory();

    useEffect(() => {

        getUserById(id).then((dat) => {

            if(!dat){
                history.push('/usernotfound');
            }else{
                setThisUser(dat)
            }
            
        });

    // eslint-disable-next-line
    },[]);

    const returnHandler = () => {
        history.goBack();
    };
    
    return (
        <>

        <div className="profile-container">

            <div className="floating-button">
                <Fab
                    color="secondary"
                    aria-label="return to previous page."
                    onClick={returnHandler}
                >
                    <ArrowBackIcon />
                </Fab>
            </div>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={11}
                    md={8}
                >
                    <Card>

                        <CardContent className="card-content" >

                        <div className={thisUser.isActive ? "profile-picture-container-active" : "profile-picture-container-inactive"}>
                            <img
                                src={thisUser.picture}
                                alt={thisUser.name + ' ' + thisUser.lastname}
                            />
                        </div>

                        <h1>{ thisUser.name + ' ' + thisUser.lastname }</h1>

                        <h2>{ thisUser.email }</h2>

                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>
            
        </div>
        
        </>
    );
}
 
export default UserProfile;