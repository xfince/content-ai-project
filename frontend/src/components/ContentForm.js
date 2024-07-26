import React, { useState } from 'react';

function ContentForm({ onGenerate, onModerate }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(input);
  };

  const handleModerate = () => {
    onModerate(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a prompt or content to moderate"
        rows="4"
      />
      <div>
        <button type="submit">Generate Content</button>
        <button type="button" onClick={handleModerate}>Moderate Content</button>
      </div>
    </form>
  );
}

export default ContentForm;