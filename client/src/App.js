// src/App.js

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connectToSocket } from "./utils/websocketConnection/websocketConnection";
import Home from "./home/Home";
import LoginPage from "./loginPage/LoginPage";
import Dashboard from "./dashboard/Dashboard";

function App() {
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = connectToSocket();

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Socket.IO Chat App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
