import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ margin: '5px 0' }}>Good: {good}</p>
      <p style={{ margin: '5px 0' }}>Neutral: {neutral}</p>
      <p style={{ margin: '5px 0' }}>Bad: {bad}</p>
      <p style={{ margin: '10px 0', fontWeight: 'bold' }}>Total: {total}</p>
      <p style={{ margin: '10px 0', fontWeight: 'bold' }}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
