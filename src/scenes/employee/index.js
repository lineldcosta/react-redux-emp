
import React from 'react';
import { Route } from 'react-router-dom';
import AddEmployee from './add/add.container';
import ListEmployee from './list/list.container';
import EditEmployee from './edit/edit.container';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={ListEmployee} />
            <Route exact path="/add" component={AddEmployee} />
            <Route exact path="/edit/:id" component={EditEmployee} />
        </>
    )
}

export default Routes;