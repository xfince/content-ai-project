import React from 'react';

function ModerationResult({ result }) {
  return (
    <div className="result">
      <h2>Result:</h2>
      <p><strong>Content:</strong> {result.content}</p>
      <p>
        <strong>Appropriate:</strong> 
        <span className={result.is_appropriate ? 'appropriate' : 'inappropriate'}>
          {result.is_appropriate ? 'Yes' : 'No'}
        </span>
      </p>
      <p><strong>Explanation:</strong> {result.explanation}</p>
    </div>
  );
}

export default ModerationResult;