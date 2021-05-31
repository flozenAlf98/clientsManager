import React from 'react';
import Grid from '@material-ui/core/Grid';

import UserItem from './User';


function UsersList({ userData, deleteUser, changeStatus }) {
    return (
        <>
            <div className="users-list">

                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    {
                        userData.map( (user, index) => {
                            return(
                                <Grid
                                    item
                                    md={8}
                                    xs={12}
                                    key={user.id}
                                >
                                    <UserItem 
                                        data={user}
                                        delete={deleteUser.bind(this, index)}
                                        status={changeStatus.bind(this, index)}
                                    />
                                </Grid>);
                                
                        })
                    }
                </Grid>
                
            </div>
        </>
    );
};
export default UsersList;