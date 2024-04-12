import React from 'react';
import CustomAccordian from './CustomAccordian';

const ResponseAccordion = ({ reports }) => {
  const groupedReports = reports.reduce((groups, report) => {
    const { testbed_name } = report.testbed;
    if (!groups[testbed_name]) {
      groups[testbed_name] = [];
    }
    groups[testbed_name].push(report);
    return groups;
  }, {});
  
  return (
    <div>
      {Object.keys(groupedReports).map((testbed_name) => (
        <div key={testbed_name}>
          <CustomAccordian testbedName={testbed_name} responseArray={groupedReports[testbed_name]} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default ResponseAccordion;
