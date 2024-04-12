import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';
import {
    Link
} from 'react-router-dom'
import testbedReportingAppBarStyles from '../../../styles/common/navigation/testbedReportingAppBarStyles';

const TestbedReportingAppBar = () => {
    const classes = testbedReportingAppBarStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <img src="/logo-full-color.svg" alt="Company Logo" href='#' className={classes.logo}>
                </img>
            </Toolbar>
        </AppBar>
    )
}

export default TestbedReportingAppBar;
