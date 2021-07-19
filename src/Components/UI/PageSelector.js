import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { changeData } from '../../services';

const PageSelector = () => {

    const currentFilter = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const pageHandler = (e, v) => {
        let newFilter = Object.assign({}, currentFilter)
        newFilter.page = v;
        changeData(dispatch, newFilter);
    };

    return (
        <>
            <Grid
                item
                md={8}
                xs={12}
            >
                <Pagination
                    count={10}
                    page={currentFilter.page}
                    onChange={pageHandler}
                />
            </Grid>
        </>
    );
}
 
export default PageSelector;