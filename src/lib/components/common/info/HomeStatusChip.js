import React from 'react';
import { Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import WarnIcon from '@mui/icons-material/WarningAmber';
import FailIcon from '@mui/icons-material/ErrorOutline';
import SkipIcon from '@mui/icons-material/Block';


const HomeStatusChip = props => {

    const reportLevel = props.reportLevel || "";
    const text = `${reportLevel} ${props.status}`;
    const severities = {
        Compliant: "success",
        WARN: "warning",
        "Non-Compliant": "error",
        Skipped: "info",
        UNKNOWN: "error"
    }

    const icons = {
        PASS: <CheckIcon />,
        WARN: <WarnIcon />,
        FAIL: <FailIcon />,
        SKIP: <SkipIcon />,
        UNKNOWN: <FailIcon />
    }

    return (
        <Chip
            icon={icons[props.status]}
            color={severities[props.status]}
            variant="contained"
            label={text}
        />
    )
}

export default HomeStatusChip;