import { io } from 'socket.io-client';
import React from 'react';
import { useDispatch } from 'react-redux';
import SocketContext from '../socket.js';
import { addMessage } from '../../slices/messagesSlice';

const socketProvider = ({ children }) => {
  const socket = io();
  const dispatch = useDispatch();

  socket.on('newMessage', (msg) => {
    console.log('msg', msg);
    dispatch(addMessage(msg));
  });
  // socket.on('newChannel', (channel) => {
  //     store.dispatch(addChannel({ channel }));
  // });
  // socket.on('removeChannel', ({ id }) => {
  //     store.dispatch(removeChannel({ id }));
  // });
  // socket.on('renameChannel', (channel) => {
  //     store.dispatch(renameChannel({
  //         id: channel.id,
  //         changes: {
  //             name: channel.name,
  //         },
  //     }));
  // });

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default socketProvider;
