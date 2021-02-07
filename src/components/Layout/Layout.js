import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div className={classes.Toolbar}>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;