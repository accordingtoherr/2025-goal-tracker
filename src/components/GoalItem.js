import React from 'react';

function GoalItem({ habit, onToggleCompletion }) {
  return (
    <li>
      <span>{habit.goal}</span>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleCompletion(habit.id)}
      />
    </li>
  );
}

export default GoalItem;
