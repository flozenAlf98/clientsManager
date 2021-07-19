import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment, Checkbox, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { changeData } from '../../services';

const Filter = ({ changeFilter }) => {

    const currentFilter = useSelector(state => state.filters);

    const dispatch = useDispatch();

    const allCheckHandler = () => {

        let newFilter = Object.assign({}, currentFilter);
        newFilter.all = !newFilter.all;
        changeData(dispatch, newFilter)

    };

    const statusSwitchHandler = () =>{

        let newFilter = Object.assign({}, currentFilter);
        newFilter.active = !newFilter.active;

        changeData(dispatch, newFilter)

    };

    return (
        <>
        <Grid
            item
            md={8}
            xs={12}
        >
            <FormGroup>
                <Grid
                    container
                    alignItems="center"
                    spacing={2}
                >

                    <Grid item xs={12} md={8}>
                        <TextField
                            label="Buscar"
                            variant="filled"
                            fullWidth={true}
                            onChange={changeFilter}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"> <SearchIcon /> </InputAdornment>,
                            }}
                        />
                    </Grid>
                
                    <Grid item xs={6} md={2}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    checked={currentFilter.all}
                                    onChange={allCheckHandler}
                                />
                            }
                            label="Todos"
                        />
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <FormControlLabel
                            control={
                                <Switch
                                    disabled={currentFilter.all}
                                    checked={currentFilter.active}
                                    onChange={statusSwitchHandler}
                                />
                            }
                            label={currentFilter.active ? "Conectados": "Desconectados"}
                        />
                    </Grid>
                    
                </Grid>
            </FormGroup>        
        </Grid>
        </>
    );
}
 
export default Filter;