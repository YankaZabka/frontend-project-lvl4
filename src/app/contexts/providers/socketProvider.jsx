import { io } from 'socket.io-client';
import React from 'react';
import { useDispatch } from 'react-redux';
import SocketContext from '../socket.js';
import { addMessage } from '../../slices/messagesSlice';
import { addChannel, removeChannel } from '../../slices/channelsSlice';

const socketProvider = ({ children }) => {
  const socket = io();
  const dispatch = useDispatch();

  socket.on('newMessage', (msg) => {
    dispatch(addMessage(msg));
  });
  socket.on('newChannel', (channel) => {
    dispatch(addChannel(channel));
  });
  socket.on('removeChannel', ({ id }) => {
    dispatch(removeChannel(id));
  });
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
