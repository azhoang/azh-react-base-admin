import {
  useSteps,
  Stepper as CRStepper,
  Box,
  Flex,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

export default function useStepper(props?: IStepperProps): IStepValue {
  const [steps, setSteps] = React.useState<IStepItem[]>(props?.steps || []);
  const [disableHeaderJump, setDisableHeaderJump] = React.useState(
    !!props?.disableHeaderJump,
  );
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const jumpStep = React.useCallback(
    (index: number) => async () => {
      if (activeStep === index) return;
      if (!steps[index].allowJump) return;
      if (steps[activeStep].preChangeStep) {
        const valid = await steps[activeStep].preChangeStep?.();
        if (!valid) return;
      }
      setActiveStep(index);
    },
    [activeStep, setActiveStep, steps],
  );
  const nextStep = async () => {
    if (activeStep >= steps.length) return;
    if (steps[activeStep].preChangeStep) {
      const valid = await steps[activeStep].preChangeStep?.();
      if (!valid) return;
    }
    setActiveStep(activeStep + 1);
  };
  const prevStep = async () => {
    if (activeStep <= 0) return;
    if (steps[activeStep].preChangeStep) {
      const valid = await steps[activeStep].preChangeStep?.();
      if (!valid) return;
    }
    setActiveStep(activeStep - 1);
  };
  const StepHeader = React.useMemo(() => {
    return () => (
      <CRStepper
        index={activeStep}
        colorScheme={props?.colorSchemeHeader}
      >
        {steps
          .filter((i) => i.showOnHeader)
          .map((step, index) => (
            <Step key={index}>
              <Flex
                flexDirection="row"
                alignItems="center"
                onClick={jumpStep(index)}
                gap={2}
              >
                <StepIndicator
                  cursor={
                    step.allowJump && !disableHeaderJump ? "pointer" : "unset"
                  }
                >
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={
                      <BsCheckLg
                        color={
                          activeStep < index
                            ? "var(--chakra-colors-gray-300)"
                            : props?.colorSchemeHeader
                        }
                      />
                    }
                    active={
                      <BsCheckLg color={props?.colorSchemeHeader} />
                    }
                  />
                </StepIndicator>

                <Box
                  flexShrink="0"
                  color={
                    activeStep < index
                      ? "gray.300"
                      : props?.colorSchemeHeader
                  }
                  cursor={
                    step.allowJump && !disableHeaderJump ? "pointer" : "unset"
                  }
                >
                  <StepTitle>{step.title}</StepTitle>
                </Box>
              </Flex>

              <StepSeparator />
            </Step>
          ))}
      </CRStepper>
    );
  }, [
    activeStep,
    jumpStep,
    props?.colorSchemeHeader,
    steps,
    disableHeaderJump,
  ]);
  const ActiveComponent = React.useMemo(
    () => steps[activeStep]?.Component,
    [steps, activeStep],
  );
  return {
    steps,
    activeStep,
    disableHeaderJump,
    jumpStep,
    nextStep,
    prevStep,
    setSteps,
    StepHeader,
    setDisableHeaderJump,
    ActiveComponent,
  };
}
