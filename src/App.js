import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/down.jpg';
//import useStyles from './styles';

const App = () => {
//    const classes = useStyles();

     return (<div /*className={classes.container}*/>
        <div >
            <div position="static" color="inherit">
                <span align="center">Momories</span>
                <img src={memories} height="60" />
            </div>
        </div>
        <div >
            <div>
                <Posts/>
            </div>
            <div>
                <Form/>
            </div>

        </div>
    </div>    

    );
}

export default App;