import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ testbedName, responseArray }) => {
  const uniqueStatuses = responseArray.reduce((acc, report) => {
    report.phases.forEach((phase) => {
      if (!acc.includes(phase.status)) {
        acc.push(phase.status);
      }
    });
    return acc;
  }, []);
  
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
              {responseArray.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.input_parameters.server || report.input_parameters.url || report.input_parameters.base_url}</TableCell>
                  {report.phases.map((phase) => (
                    <TableCell key={phase.phase_name}>{phase.summary.passed}</TableCell>
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
