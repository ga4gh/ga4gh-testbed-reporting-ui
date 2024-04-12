import { makeStyles } from '@mui/styles';

const testbedReportingAppBarStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f0f0f0',
        borderBottom: '2px solid black',
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
    logo: {
        height: 48
    }
}));

export default testbedReportingAppBarStyles;
