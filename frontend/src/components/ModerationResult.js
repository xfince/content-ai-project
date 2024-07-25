import React from 'react';

function ModerationResult({ result }) {
  return (
    <div>
      <h2>Result:</h2>
      <p><strong>Content:</strong> {result.content}</p>
      <p><strong>Appropriate:</strong> {result.is_appropriate ? 'Yes' : 'No'}</p>
      <p><strong>Explanation:</strong> {result.explanation}</p>
    </div>
  );
}

export default ModerationResult;