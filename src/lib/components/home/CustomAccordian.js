import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StatusChip from '../common/info/HomeStatusChip';
import { Link } from 'react-router-dom';


const CustomAccordion = ({ testbedName, responseArray }) => {
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
              <TableRow>
                <TableCell>Server Name</TableCell>
                {responseArray[0].phases.map((phase) => (
                  <TableCell key={phase.phase_name}>{phase.phase_name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <Link to={`/reports/${report.id}`}>
                      {report.input_parameters.server || report.input_parameters.url || report.input_parameters.base_url}
                    </Link>
                  </TableCell>
                  {report.phases.map((phase) => (
                    <TableCell key={phase.phase_name}><StatusChip status={statusMap[phase.status]}></StatusChip></TableCell>
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
