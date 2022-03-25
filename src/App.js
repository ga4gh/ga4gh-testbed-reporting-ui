import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import TestbedReportingAppBar from './lib/components/common/navigation/TestbedReportingAppBar';
import Home from './lib/components/pages/Home';
import Report from './lib/components/pages/report/Report';
import theme from './lib/styles/theme';

const App = () => {
    return (
        <Switch>
            <TestbedReportingAppBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/testbeds/:testbedId/series/:seriesId/reports/:reportId' component={Report} />
        </Switch>
    )
}

export default App;
