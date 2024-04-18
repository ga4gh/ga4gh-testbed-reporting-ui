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
          About Us
        </Link>{' '}
        |{' '}
        <Link className={classes.link} color="inherit" href="#" target="_blank" rel="noopener noreferrer">
          Support
        </Link>{' '}
        |{' '}
        <Link className={classes.link} color="inherit" component={RouterLink} to={"/specifications/"} target="_blank" rel="noopener noreferrer">
          Specifications 
        </Link>{' '}
        |{' '}
        <a
            className={classes.link}
            href="/specifications/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Specifications
          </a>
      </Typography>
    </footer>
  );
};

export default Footer;
