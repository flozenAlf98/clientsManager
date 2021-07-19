import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import Header from '../UI/Header';
import Filter from '../UI/Filter';
import PageSelector from '../UI/PageSelector';
import UserItem from './User';


function UsersList() {

    const users = useSelector(state => state.users);

    const [ filterString, setFilterString ] = useState("");

    const filterHandler = (e) => {
        setFilterString(e.target.value.toLowerCase());
    };

    return (
        <>
            <Header />
            
            <div className="users-list">

                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <Filter changeFilter={filterHandler} />

                    { filterString.length === 0 ?
                        users.map( (user) => {
                            
                            return(
                                <Grid
                                    item
                                    md={8}
                                    xs={12}
                                    key={user.id}
                                >
                                    <UserItem data={user} />
                                </Grid>);
                                
                        }) :
                        // eslint-disable-next-line
                        users.map( (user) => {
                            
                            if( user.name.toLowerCase().search(filterString) !== -1 || 
                            user.lastname.toLowerCase().search(filterString) !== -1 || 
                            user.email.toLowerCase().search(filterString) !== -1){
                                return(
                                    <Grid
                                        item
                                        md={8}
                                        xs={12}
                                        key={user.id}
                                    >
                                        <UserItem data={user} />
                                    </Grid>);
                            }
                            
                        })
                    }

                    <PageSelector />

                </Grid>
                
            </div>
        </>
    );
};
export default UsersList;