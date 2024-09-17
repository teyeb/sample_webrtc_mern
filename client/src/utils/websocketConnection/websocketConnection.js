import io from 'socket.io-client';

const url = "http://localhost:4000";

export const connectToSocket = () => {
  const socket = io.connect(url);

  // Listen for messages from the server
  socket.on('message', (msg) => {
    console.log('Received from server:', msg);
  });

  // Send a message to the server
  socket.emit('message', 'Hello from the client. Thanks!');

  return socket;
};