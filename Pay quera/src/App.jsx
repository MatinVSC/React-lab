import { useEffect, useState } from "react";
import { TransportLayout } from "./layouts/TransportLayout";
import { StepVariant } from "./constants/StepValriants";
import { TargetCredit } from "./features/TargetCredit";
import { SourceCredit } from "./features/SourceCredit";
import { ReportTransport } from "./features/ReportTransport";

const steps = [TargetCredit, SourceCredit, ReportTransport];

function App() {
  const [stepsForm, setStepsForm] = useState([
    { sourceCredit: "", targetCredit: "", price: "" },
    { cvv2: "", month: "", year: "", dynamicPassword: "", timer: null },
    {},
  ]);

  // step
  const [step, setStep] = useState(0);

  // logger effect 
  useEffect(() => console.log("logger effect stepsForm => ", stepsForm), [stepsForm]);

  // go to next step
  const onNextStep = () => {
    steps.length > step && setStep(prevState => prevState + 1);
  };

  // go to prev step
  const onPrevStep = () => {
    step > 0 && setStep(prevState => prevState - 1);
  };

  // get step value
  const getStepValue = (step) => {
    return stepsForm[step];
  };

  // set timer 
  const handleStepValue = (step, name, value) => {
    setStepsForm(prevState => prevState.map((item, index) => {
      if (index === step) {
        item[name] = value;
      };
      return item
    }))
  };

  // fix all onChanges and set in stepsForm state
  const registerInput = (name) => {
    return {
      onChange: (event) => {
        setStepsForm(prevState => prevState.map((step) => {
          if (name in step) {
            step[name] = event.target.value;
          }

          return step
        }));
      }
    }
  };

  // fix otp countdown timer
  useEffect(() => {
    const mainStep = getStepValue(1);
    const interVal = setInterval(() => {
      if (mainStep.timer) {
        handleStepValue(1, "timer", mainStep.timer - 1);
      }
    }, 1000);

    return () => clearInterval(interVal);
  }, [step]);


  const CurrentStep = steps[step];

  return (
    <TransportLayout>
      <CurrentStep
        registerInput={registerInput}
        handleValue={(name, value) => handleStepValue(step, name, value)}
        getStepValue={getStepValue}
        onNextStep={onNextStep}
        onPrevStep={onPrevStep}
      />
    </TransportLayout>
  );
}

export default App;