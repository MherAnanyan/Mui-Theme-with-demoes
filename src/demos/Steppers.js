import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Step title', 'Step title', 'Step title'];

export const Steppers = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        variant="error"
        color="secondary"
        activeStep={1}
        alternativeLabel
        sx={{ color: 'secondary' }}
      >
        {steps.map((label) => (
          <Step
            variant="warning"
            FabProps={{ color: 'secondary' }}
            color="secondary"
            iconProps={{ color: 'secondary' }}
            key={label}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
