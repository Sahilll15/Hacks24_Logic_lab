const socketCtrl = (io) => {
    io.on('connection', (socket) => {
        const userId = socket.id;

        handleConnection(socket, io, userId);
    });
};


const handleConnection = (socket, io, userId) => {

    socket.on('joinRoom', async ({ chatId, user, userId }) => {

        socket.join(chatId);

        io.to(chatId).emit('joinRoom', { message: `${user} joined the chat` });

    });

    socket.on('sendMessage', async ({ chatId, user, message, userId }) => {

        io.to(chatId).emit('message', { user: user, message, userId });


    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

};

module.exports = socketCtrl;