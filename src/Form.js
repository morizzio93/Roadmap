import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate a network request
    try {
      const response = await simulateNetworkRequest({ username });

      if (response.status === 200) {
        console.log('Response Status:', response.status);
        console.log('Form submitted successfully');

        // Store username in localStorage
        localStorage.setItem('user', JSON.stringify({ username }));
        console.log('Username saved in localStorage');
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const simulateNetworkRequest = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: data,
        });
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
