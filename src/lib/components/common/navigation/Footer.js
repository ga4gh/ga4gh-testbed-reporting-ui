import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Specifications from '../../pages/Specifications';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#333333',
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body2" className={classes.link}>
      The Global Alliance for Genomics and Health
      </Typography>
      <Typography variant="body2" className={classes.link}>
        <Link className={classes.link} color="inherit" href="https://www.ga4gh.org/about-us/ga4gh-inc/" target="_blank" rel="noopener noreferrer">
          About GA4GH
        </Link>{' '}
        |{' '}
        <Link className={classes.link} color="inherit" href="https://ga4gh.github.io/ga4gh-testbed-ui/support" target="_blank" rel="noopener noreferrer">
          Support
        </Link>{' '}
        |{' '}
        <Link className={classes.link} color="inherit" href="https://ga4gh.github.io/ga4gh-testbed-ui/specifications" target="_blank" rel="noopener noreferrer">
          Specifications 
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
