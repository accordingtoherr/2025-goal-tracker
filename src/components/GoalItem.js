import React from "react";

const GoalItem = ({ habit }) => {
    return (
      <div>
        <h3>{habit.name}</h3>
        <p>{habit.completed} / {habit.target} completed</p>
      </div>
    );
  };

export default GoalItem;
