import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

function ExpandableRow({ testbedName, totalReports }) {
  const [expanded, setExpanded] = useState(false);
  const [reportData, setReportData] = useState([]);

  const handleExpandClick = async () => {
    setExpanded(!expanded);
    if (!expanded) {
      try {
        const response = await fetch(
          `https://api.example.com/reports?testbedName=${testbedName}`
        );
        const data = await response.json();
        setReportData(data);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    }
  };

  return (
    <>
      <TableRow onClick={handleExpandClick}>
        <TableCell>{testbedName}</TableCell>
        <TableCell>{totalReports}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="report data">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reportData.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.id}</TableCell>
                      <TableCell>{report.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ExpandableRow;
