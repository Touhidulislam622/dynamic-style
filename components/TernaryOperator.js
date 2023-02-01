import React from 'react';

const TernaryOperator = () => {
    const error = true;
    return (
        <div>
            <h1 style = {
        {
          color: error ? "red" : "white",
          backgroundColor: error ? "black ": "green",
        }
      }>Hlw World</h1>
        </div>
    );
};

export default TernaryOperator;