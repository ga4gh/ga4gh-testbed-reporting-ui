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
import { PixRounded } from '@mui/icons-material';

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
    let env = process.env.REACT_APP_DEPLOYMENT_ENV;

    //useEffect(() => simpleApiCall(`${baseUrl}/specifications`, setSpecifications, setErrSpecifications), []);
    //useEffect(() => simpleApiCall(`${baseUrl}/testbeds`, setTestbeds, setErrTestbeds), []);
    //useEffect(() => simpleApiCall(`${baseUrl}/organizations`, setOrganizations, setErrOrganizations), []);
    //useEffect(() => simpleApiCall(`${baseUrl}/platforms`, setPlatforms, setErrPlatforms), []);
    
    useEffect(() => simpleApiCall(`${baseUrl}/reports`, setReports, setErrReports), []);
    
    return (
        <PageContainer>
            <SpaceDivider />
            <Typography variant="h3" style={{ textAlign: 'center' }}>GA4GH Testbed</Typography>
            <SpaceDivider />

            <div>
                {reports !== null ? (
                    reports.length > 0 ? (
                        <ResponseAccordion reports={reports} /> ) : (
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