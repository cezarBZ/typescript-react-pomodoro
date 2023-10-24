import React, { useState } from "react";
import { PomodoroTimerProps } from "./PomodoroTimerProps";
import useInterval from "../../hooks/useInterval";
import Button from "../button/Button";
import Timer from "../timer/Timer";

const PomodoroTimer: React.FC<PomodoroTimerProps> = (
  props: PomodoroTimerProps
) => {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" />
    </div>
  );
};

export default PomodoroTimer;
