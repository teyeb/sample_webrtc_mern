// server.js

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

// Initialize Express app
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO server
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Listen for client connections
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  // Send a welcome message to the client
  socket.emit('message', 'Hello from the server!');

  // Listen for messages from the client
  socket.on('message', (msg) => {
    console.log(`Message from ${socket.id}: ${msg}`);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
