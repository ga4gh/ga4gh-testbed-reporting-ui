import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#757575',
        borderBottom: '2px solid black',
    },
    logo: {
        width: 100,
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#3f51b5',
        fontWeight: 'bold',
    },
    root: {
        flexGrow: 1,
        marginBottom: 50
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    heading: {
        marginLeft: 20,
        marginRight: 20
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    root: {
        flexGrow: 1,
        marginBottom: 50
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        marginLeft: 20,
        marginRight: 20
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
        <Toolbar>
            <img src="/logo-full-color.svg" alt="Company Logo" to='#' className={classes.logo} />
        </Toolbar>
        </AppBar>
    );
};

export default Header;
