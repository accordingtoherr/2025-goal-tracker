import React, { useState, useEffect } from "react";
import GoalList from "../components/GoalList";
import ProgressBar from "../components/ProgressBar";
import { loadHabits, saveHabits } from "../utils/localStorage";

const Dashboard = () => {
  const [habits, setHabits] = useState(loadHabits());
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), name: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  return (
<div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
  <h1 className="text-3xl font-semibold text-indigo-600 mb-8 sm:text-4xl">My 2025 Goals</h1>
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <input
      type="text"
      value={newHabit}
      onChange={(e) => setNewHabit(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md mb-4"
      placeholder="Add a goal/resolution"
    />
    <button
      onClick={handleAddHabit}
      className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
    >
      Add
    </button>
  </div>
  <div className="mt-4 w-full max-w-md">
    <ProgressBar habits={habits} />
    <GoalList habits={habits} setHabits={setHabits} />
  </div>
</div>
  );
};

export default Dashboard;
