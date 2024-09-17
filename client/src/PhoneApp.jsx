import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";


const PhoneApp = () => {
  const [myPeer, setMyPeer] = useState(null);

  useEffect(() => {

    
    const peer = new window.Peer(
      `${Math.floor(Math.random() * 2 ** 18)
        .toString(36)
        .padStart(4, 0)}`,
      {
        host: window.location.hostname,
        debug: 1,
        path: "/myapp",
        port: 5010,
      }
    );
    setMyPeer(peer);

    const socket = io.connect('http://localhost:5010');
  }, []);



  return (
    <div className="fc jc aic">
       
    </div>
  );
};

export default PhoneApp;
