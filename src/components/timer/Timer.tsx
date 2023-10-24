import React from "react";
import { TimerProps } from "./TimerProps";
import { secondsToTime } from "../../utils/seconds-to-time";

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
};

export default Timer;
