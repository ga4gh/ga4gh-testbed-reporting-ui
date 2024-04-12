import React, { useEffect, useState } from 'react';
import {
    Typography,
    Button
} from '@mui/material';
import {
    Link
} from 'react-router-dom';
import { PageContainer } from '../common/layout';
import SpaceDivider from '../common/layout/SpaceDivider';
import { simpleApiCall } from '../../utils/apiUtils';
import ResponseAccordion from '../home/ResponseAccordion';
import Footer from '../common/navigation/Footer.js';

const Home = props => {

    /*
    let [specifications, setSpecifications] = useState([]);
    let [errSpecifications, setErrSpecifications] = useState(null);
    let [testbeds, setTestbeds] = useState([]);
    let [errTestbeds, setErrTestbeds] = useState(null);
    let [organizations, setOrganizations] = useState([]);
    let [errOrganizations, setErrOrganizations] = useState(null); 
    let [platforms, setPlatforms] = useState([]);
    let [errPlatforms, setErrPlatforms] = useState(null);
    */
    let [reports, setReports] = useState([]);
    let [errReports, setErrReports] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    //useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/specifications`, setSpecifications, setErrSpecifications), []);
    //useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/testbeds`, setTestbeds, setErrTestbeds), []);
    //useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/organizations`, setOrganizations, setErrOrganizations), []);
    //useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/platforms`, setPlatforms, setErrPlatforms), []);
    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/reports`, setReports, setErrReports), []);
    
    return (
        <PageContainer>
            <Typography variant="h2">GA4GH Testbed</Typography>
            <SpaceDivider />

            <div>
                {reports !== null ? (
                    reports.length > 0 ? (
                    <ResponseAccordion reports={reports} />
                    ) : (
                    <div>No data available</div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </div>

        </PageContainer>
        
    )
}

export default Home;