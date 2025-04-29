import { useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';

export const useSocket = () => {
  const socket = useContext(SocketContext);
  
  const subscribe = (destination, callback) => {
    if (!socket) return null;
    
    return socket.subscribe(destination, (message) => {
      callback(JSON.parse(message.body));
    });
  };
  
  const send = (destination, body) => {
    if (socket) {
      socket.publish({
        destination,
        body: JSON.stringify(body)
      });
    }
  };
  
  return { subscribe, send, connected: socket?.connected || false };
};