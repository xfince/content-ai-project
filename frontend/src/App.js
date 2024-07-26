import React, { useState } from 'react';
import ContentForm from './components/ContentForm';
import ModerationResult from './components/ModerationResult';
const URL = process.env.REACT_APP_BACKEND_URL
console.log(URL)

function App() {
  const [result, setResult] = useState(null);

  const handleGenerate = async (prompt) => {
    const response = await fetch(`${URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    setResult(data);
  };

  const handleModerate = async (content) => {
    const response = await fetch(`${URL}/moderate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    const data = await response.json();
    setResult({ content, ...data });
  };

  return (
    <div className="App">
      <h1>AI Content Generator and Moderator</h1>
      <ContentForm onGenerate={handleGenerate} onModerate={handleModerate} />
      {result && <ModerationResult result={result} />}
    </div>
  );
}

export default App;