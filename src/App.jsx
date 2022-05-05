import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:4001';
function App() {
  const [res, setRes] = useState('nothing here yet');
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    newSocket.on('totalConnections', (data) => {
      console.log(data);
      setRes(data);
    });
  }, []);

  return (
    <>
      <p>Total Connections in this session: {res}</p>
      <br />
    </>
  );
}

export default App;
