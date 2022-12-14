import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Wrapper } from '../Wrapper';
import { makeStyles } from '@material-ui/styles';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const customStyles = {
  '& .MuiStepLabel-root .Mui-completed': {
    color: 'Step.main', // circle color (COMPLETED)
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: 'text.primary', // Just text label (COMPLETED)
  },
  '& .MuiStepLabel-root .Mui-active': {
    color: 'Step.main', // circle color (ACTIVE)
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: 'text.primary', // Just text label (ACTIVE)
  },
  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: 'text.primary', // circle's number (ACTIVE)
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
  },
  stepLabel: {
    fontSize: '18px !important',
  },
  step: {
    '& $completed': {
      color: 'lightgreen',
    },
    '& $active': {
      color: 'pink',
    },
    '& $disabled': {
      color: 'red',
    },
  },
  alternativeLabel: {
    color: 'red',
  },
  active: {},
  completed: {},
  disabled: {},
  labelContainer: {
    '& $alternativeLabel': {
      marginTop: 0,
      color: 'red',
    },
  },
}));
export const Steppers = () => {
  const classes = useStyles();
  return (
    <Wrapper title="Steppers">
      <Box sx={{ width: '100%', margin: '20px' }}>
        <Stepper activeStep={1} className={classes.root}>
          {steps.map((label) => (
            <Step
              key={label}
              className={classes.labelContainer}
              sx={customStyles}
            >
              <StepLabel
                classes={{
                  active: classes.stepLabel,
                  label: classes.stepLabel,
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ width: '100%', margin: '40px 27px' }}>
        <Stepper
          activeStep={1}
          className={classes.root}
          orientation="vertical"
        >
          {steps.map((label) => (
            <Step
              key={label}
              className={classes.labelContainer}
              sx={customStyles}
            >
              <StepLabel
                classes={{
                  active: classes.stepLabel,
                  label: classes.stepLabel,
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Wrapper>
  );
};
