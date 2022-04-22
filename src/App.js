import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import './App.css';

const App = () => {

  return (
    <ChatEngine
			height='100vh'
			userName='sumanthTest'
			userSecret='123123'
			projectID='bfb85c29-10f0-4620-b292-c35e59cc65e2'
		/>
  );
};

// infinite scroll, logout, more customizations...

export default App; 