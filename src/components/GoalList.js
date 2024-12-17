import React from 'react';
import GoalItem from './GoalItem';

function GoalList({ habits, onToggleCompletion }) {
  return (
    <ul className="space-y-3">
      {habits.map((habit) => (
        <GoalItem
          key={habit.id}
          habit={habit}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </ul>
  );
}

export default GoalList;
