import React from 'react';
import GoalItem from './GoalItem';

function GoalList({ habits, onToggleCompletion }) {
  return (
    <ul>
      {habits.map((habit) => (
        <GoalItem key={habit.id} habit={habit} onToggleCompletion={onToggleCompletion} />
      ))}
    </ul>
  );
}

export default GoalList;
