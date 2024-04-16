import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import TestbedReportingAppBar from './lib/components/common/navigation/TestbedReportingAppBar';
import Home from './lib/components/pages/Home';
import Specification from './lib/components/pages/Specification';
import Specifications from './lib/components/pages/Specifications';
import Testbed from './lib/components/pages/Testbed';
import Organization from './lib/components/pages/Organization';
import Platform from './lib/components/pages/Platform';
import Report from './lib/components/pages/report/Report';
import ReportSeries from './lib/components/pages/ReportSeries';
import Layout from './lib/components/common/layout/Layout';
import ScrollButton from './lib/components/common/navigation/ScrollButton';
//import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div>
            <TestbedReportingAppBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/specifications/:specificationId' component={Specification} />
                <Route exact path='/testbeds/:testbedId' component={Testbed} />
                <Route exact path='/organizations/:organizationId' component={Organization} />
                <Route exact path='/platforms/:platformId' component={Platform} />
                <Route exact path='/report-series/:reportSeriesId' component={ReportSeries} />
                <Route exact path='/reports/:reportId' component={Report} />
                <Route exact path='/specifications/' component={Specifications} />
            </Switch>
            <ScrollButton />
            <Layout />
        </div>
    )
}

export default App;
