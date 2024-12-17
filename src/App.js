import React, { useState } from 'react';
import GoalList from './components/GoalList';

function GoalTracker() {
  const [goals, setGoals] = useState([]);
  const [newGoalText, setNewGoalText] = useState('');

  const handleAddGoal = () => {
    if (newGoalText.trim()) {
      const newGoal = {
        id: Date.now(),
        goal: newGoalText,
        completed: false,
      };
      setGoals([...goals, newGoal]);
      setNewGoalText('');
    }
  };

  const handleToggleCompletion = (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
  };

  return (
    <div>
      <h1>Tracking my 2025 Goals</h1>
      <input
        type="text"
        value={newGoalText}
        onChange={(e) => setNewGoalText(e.target.value)}
        placeholder="Enter new habit"
      />
      <button onClick={handleAddGoal}>Add Goal</button>

      <h2>Your Goals</h2>
      <GoalList habits={goals} onToggleCompletion={handleToggleCompletion} />
    </div>
  );
}

export default GoalTracker;
