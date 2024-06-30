import React from 'react';

const DateComponent: React.FC = () => {
  const today = new Date();

  return (
    <div>
      <h2>Today's Date</h2>
      <p>{today.toDateString()}</p>
    </div>
  );
};

export default DateComponent;
