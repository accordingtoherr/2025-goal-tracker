import React from "react";
import ProgressBar from "./ProgressBar";

const GoalItem = ({ habit }) => {
    return (
      <div>
        <h3>{habit.name}</h3>
        <ProgressBar completed={habit.completed} target={habit.target} />
        <p>{habit.completed} / {habit.target} completed</p>
      </div>
    );
  };

export default GoalItem;
