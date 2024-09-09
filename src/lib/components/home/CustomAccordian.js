import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StatusChip from '../common/info/HomeStatusChip';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  accordion: {
    position: 'relative',
    padding: theme.spacing(2),
    boxShadow: 'none',
  },
  accordionContent: {
    position: 'relative',
    zIndex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.2,
    backgroundImage: '/logo-mark-white.svg', // Path to your background image in the public directory
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  tableHeaderCell: {
    textTransform: 'capitalize', // Capitalize the first letter of each word
  },
  serverNameCell: {
    width: 200, // Set the desired width for the Server Name column
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#ffffff', // White text color for header cells
  },
  headerRowStyle: {
    backgroundColor: '#6f6f6f', // Dark gray background for header row
  },
  cellStyle: {
    color: '#000000', // Black text color for cells
  },
  serverNameCellStyle: {
    width: '30%', // 40% width for "Server Name" column
  },
  otherCellStyle: {
    width: '15%', // 15% width for other columns
    color: '#000000', // Black text color for cells
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
                <TableCell className={`${classes.tableHeaderCell} ${classes.serverNameCellStyle}`} align="left">
                  Server Name
                </TableCell>
                {responseArray[0].phases.map((phase) => (
                  <TableCell key={phase.phase_name} className={`${classes.tableHeaderCell} ${classes.otherCellStyle}`} align="center">
                    {phase.phase_name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReports.map((report, index) => (
                <TableRow key={report.id} style={{ backgroundColor: index % 2 === 1 ? '#ffffff' : '#f0f0f0' }}>
                  <TableCell className={`${classes.serverNameCell} ${classes.serverNameCellStyle}`}>
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
