import {io} from "socket.io-client";
import SocketContext from "../socket.js";
import React from "react";

export default ({children}) => {
    const socket = io()

    // socket.on('newMessage', (msg) => {
    //     store.dispatch(addNewMessages({ msg }));
    // });
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
)

}
