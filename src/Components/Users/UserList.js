import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import UserItem from './User';


function UsersList({ deleteUser, changeStatus }) {

    const users = useSelector(state => state.users);

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
                        users.map( (user, index) => {
                            return(
                                <Grid
                                    item
                                    md={8}
                                    xs={12}
                                    key={user.id}
                                >
                                    <UserItem data={user} />
                                </Grid>);
                                
                        })
                    }
                </Grid>
                
            </div>
        </>
    );
};
export default UsersList;