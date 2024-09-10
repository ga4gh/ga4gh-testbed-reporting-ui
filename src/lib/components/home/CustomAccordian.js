import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StatusChip from '../common/info/HomeStatusChip';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  serverNameCell: {
    width: 200,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  headerRowStyle: {
    backgroundColor: '#1c75bb',
  },
  headerRowTextStyle: {
    fontWeight: 'bold',
    color: '#f8f8f8',
    textTransform: 'capitalize',
  },
  cellStyle: {
    color: '#000000',
  },
  serverNameCellStyle: {
    width: '30%',
  },
  otherCellStyle: {
    width: '15%',
    color: '#000000',
  },
}));

const CustomAccordion = ({ testbedName, responseArray }) => {
  const classes = useStyles();

  // Sort responseArray by start_time in descending order
  const sortedReports = responseArray.sort((a, b) => new Date(b.start_time) - new Date(a.start_time));

  // Filter out duplicates based on unique identifiers (server, url, base_url)
  const filteredReports = sortedReports.reduce((acc, report) => {
    const uniqueIdentifier = report.input_parameters.server || report.input_parameters.url || report.input_parameters.base_url;
    if (!acc.some((r) => r.uniqueIdentifier === uniqueIdentifier)) {
      acc.push({ ...report, uniqueIdentifier });
    }
    return acc;
  }, []);
  
  const uniqueStatuses = filteredReports.reduce((acc, report) => {
    report.phases.forEach((phase) => {
      if (!acc.includes(phase.status)) {
        acc.push(phase.status);
      }
    });
    return acc;
  }, []);

  const statusMap = {
    PASS: 'Compliant',
    FAIL: 'Non-Compliant',
    SKIP: 'Skipped'
  };
  
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography variant="h5">{testbedName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className={classes.headerRowStyle}>
                <TableCell  className={classes.headerRowStyle} align="left">
                  <Typography className={classes.headerRowTextStyle}>Server Name</Typography>
                </TableCell>
                {responseArray[0].phases.map((phase) => (
                  <TableCell  className={classes.headerRowStyle} key={phase.phase_name} align="center">
                    <Typography className={classes.headerRowTextStyle}>{phase.phase_name}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReports.map((report, index) => (
                <TableRow key={report.id} style={{ backgroundColor: index % 2 === 1 ? '#ffffff' : '#f0f0f0' }}>
                  <TableCell className={classes.serverNameCell}>
                    <Link to={`/reports/${report.id}`} className={classes.cellStyle}>
                      {report.input_parameters.server || report.input_parameters.url || report.input_parameters.base_url}
                    </Link>
                  </TableCell>
                  {report.phases.map((phase, columnIndex) => (
                    <TableCell key={phase.phase_name} className={`${classes.otherCellStyle} ${columnIndex === 0 ? classes.serverNameCellStyle : ''}`}>
                      <StatusChip status={statusMap[phase.status]} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
