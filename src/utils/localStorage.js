export const loadHabits = () => {
    const habits = localStorage.getItem('habits');
    return habits ? JSON.parse(habits) : [];
  };
  
  export const saveHabits = (habits) => {
    localStorage.setItem('habits', JSON.stringify(habits));
  };