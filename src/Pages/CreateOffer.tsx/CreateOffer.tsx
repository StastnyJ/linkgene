import React, { useState } from "react";
import { Button, Container, Step, StepButton, Stepper } from "@mui/material";
import BasicProjectInformationForm from "./BasicProjectInformationForm";
import TokensForm from "./TokensForm";
import FinnishProposal from "./FinnishPropsal";

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
          <StepButton color="inherit">Contact information</StepButton>
        </Step>
        <Step>
          <StepButton color="inherit">Finnish</StepButton>
        </Step>
      </Stepper>
      <br />
      <br />
      {step === 0 ? <BasicProjectInformationForm /> : step === 1 ? <TokensForm /> : <FinnishProposal />}
      <br />
      <br />
      <Stepper nonLinear activeStep={step}>
        <Step completed={step > 0}>
          <StepButton color="inherit">Basic project information</StepButton>
        </Step>
        <Step completed={step > 1}>
          <StepButton color="inherit">Contact information</StepButton>
        </Step>
        <Step>
          <StepButton color="inherit">Finnish</StepButton>
        </Step>
      </Stepper>
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        {step > 0 && (
          <Button color="primary" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        <span style={{ flexGrow: 1 }} />
        {step < 2 && (
          <Button color="primary" onClick={() => setStep(step + 1)}>
            Continue
          </Button>
        )}
        {step === 2 && (
          <Button color="primary" variant="contained" onClick={() => console.log("Finnish")}>
            Finnish request
          </Button>
        )}
      </div>
      <br />
      <br />
    </Container>
  );
}
