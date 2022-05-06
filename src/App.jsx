import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:4001';

const socket = io(ENDPOINT);

function App() {
  const [connections, setConnections] = useState('nothing here yet');

  useEffect(() => {
    socket.on('totalConnections', (data) => {
      console.log(data);
      setConnections(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <p>Total Connections in this session: {connections}</p>
    </>
  );
}

export default App;
