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
        <AppBar position="static" className={classes.root} color="inherit">
        <Toolbar>
        <div className={classes.logoWrapper}>
          <a href="/"> {/* Link to localhost:3000 */}
            <img
              src="/logo-full-color.svg"
              alt="Company Logo"
              className={classes.logo}
            />
          </a>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default TestbedReportingAppBar;
