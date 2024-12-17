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
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Habit Tracker</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newGoalText}
          onChange={(e) => setNewGoalText(e.target.value)}
          className="p-2 border rounded-md w-full mr-2"
          placeholder="Enter new habit"
        />
        <button
          onClick={handleAddGoal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Goal
        </button>
      </div>
      <h2 className="text-xl font-medium mb-3">Your Goals</h2>
      <GoalList habits={goals} onToggleCompletion={handleToggleCompletion} />
    </div>
  );
}

export default GoalTracker;
