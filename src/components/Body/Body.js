import React, { useState, useEffect } from 'react';
import './body.css';

function Body() {
  // Load completedTasks from local storage when component mounts
  const initialCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);

  useEffect(() => {
    // Save completedTasks to local storage whenever it changes
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const toggleCompleted = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((taskIndex) => taskIndex !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  // Initialize hours and minutes
  const firstDayHours = 4;
  const firstDayMinutes = 0;

  // Generate an array of objects representing each day and its time duration
  const days = Array.from({ length: 30 }, (_, index) => {
    // Calculate total minutes for each day based on the first day's time and increment by 2% each day
    let totalMinutes = (firstDayHours * 60) + firstDayMinutes;
    totalMinutes *= Math.pow(1.02, index);

    // Calculate hours and minutes for the current day
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    return {
      day: index + 1,
      hours: hours,
      minutes: minutes
    };
  });

  // Divide days into three arrays for each <ul>
  const ul1Days = days.slice(0, 10);
  const ul2Days = days.slice(10, 20);
  const ul3Days = days.slice(20, 30);

  return (
    <div className='container1'>
      <ul>
        {ul1Days.map((day, index) => (
          <li key={index}
            onClick={() => toggleCompleted(index)}
            className={completedTasks.includes(index) ? 'completed' : ''}>
            Day {day.day}: {day.hours} hours, {day.minutes} minutes
          </li>
        ))}
      </ul>
      <div className='vl1'></div>
      <ul>
        {ul2Days.map((day, index) => (
          <li key={index + 10} // Add 10 to index to ensure unique key
            onClick={() => toggleCompleted(index + 10)}
            className={completedTasks.includes(index + 10) ? 'completed' : ''}>
            Day {day.day}: {day.hours} hours, {day.minutes} minutes
          </li>
        ))}
      </ul>
      <div className='vl'></div>
      <ul>
        {ul3Days.map((day, index) => (
          <li key={index + 20} // Add 20 to index to ensure unique key
            onClick={() => toggleCompleted(index + 20)}
            className={completedTasks.includes(index + 20) ? 'completed' : ''}>
            Day {day.day}: {day.hours} hours, {day.minutes} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
