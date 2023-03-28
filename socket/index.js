import { Server } from 'socket.io';

const listen = (server) => {
    const io = new Server(server);
    const roomId = '8ank48Wfca96ascs';
    io.on('connect', (socket) => {
        console.log('Connected');
        socket.on('leaveChat', ({ user }) => {
            console.log('user left', user.name);
            socket.leave(roomId);
            socket.to(roomId).emit('userLeftRoom', user);
        })
        socket.on('join', ({ user }) => {
            console.log('Joined', user.name);
            socket.join(roomId);
            socket.to(roomId).emit('User joined', user);
        });
        socket.on('sendMessage', ({ message }) => {
            console.log('Send message', message);
            socket.to(roomId).emit('messageReceived', message);
        })
    })
}

export default listen;
