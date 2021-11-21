import React, { useState } from "react";
import { Button, Container, Step, StepButton, Stepper } from "@mui/material";
import BasicProjectInformationForm from "./BasicProjectInformationForm";
import TokensForm from "./TokensForm";

export default function CreateOffer() {
  const [step, setStep] = useState(0);

  return (
    <Container maxWidth="lg">
      {/* <Typography variant="h4">Basic project information</Typography> */}
      <Stepper nonLinear activeStep={step}>
        <Step completed={step > 0}>
          <StepButton color="inherit">Basic project information</StepButton>
        </Step>
        <Step completed={step > 1}>
          <StepButton color="inherit">Funding and tokens</StepButton>
        </Step>
        <Step>
          <StepButton color="inherit">Finnish</StepButton>
        </Step>
      </Stepper>
      <br />
      <br />
      {step === 0 ? <BasicProjectInformationForm /> : step === 1 ? <TokensForm /> : <></>}
      <Stepper nonLinear activeStep={step}>
        <Step completed={step > 0}>
          <StepButton color="inherit">Basic project information</StepButton>
        </Step>
        <Step completed={step > 1}>
          <StepButton color="inherit">Funding and tokens</StepButton>
        </Step>
        <Step>
          <StepButton color="inherit">Finnish</StepButton>
        </Step>
      </Stepper>
      <br />
      <div style={{ width: "100%", textAlign: "right" }}>
        {step < 3 && (
          <Button color="primary" onClick={() => setStep(step + 1)}>
            Continue
          </Button>
        )}
      </div>
      <br />
      <br />
    </Container>
  );
}
