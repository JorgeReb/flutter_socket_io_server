const {io} = require('../index');

//Mensajes de socket
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => { console.log("cliente desconectado")});

    client.on('mensaje', (payload) => {
        console.log("Escuchando mensaje...", payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    })

});