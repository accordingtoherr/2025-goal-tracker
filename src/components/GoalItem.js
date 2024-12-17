import React from 'react';

function GoalItem({ habit, onToggleCompletion }) {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-300">
      <span className={`text-lg ${habit.completed ? 'line-through text-green-600' : 'text-gray-800'}`}>
        {habit.goal}
      </span>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleCompletion(habit.id)}
        className="form-checkbox h-5 w-5 text-green-500"
      />
    </li>
  );
}

export default GoalItem;
