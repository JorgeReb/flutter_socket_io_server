const {io} = require('../index');

//Mensajes de socket
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => { console.log("Cliente desconectado")});

    // client.on('vote-band', (payload) => {
    //     bands.voteBand(payload.id);
    //     io.emit('active-bands', bands.getBands());
    // });

    // client.on('add-band', (payload) => {
    //     const newBand = new Band(payload.name);
    //     bands.addBand(newBand);
    //     io.emit('active-bands', bands.getBands());
    // });

    // client.on('delete-band', (payload) => {
    //     bands.deleteBand(payload.id);
    //     io.emit('active-bands', bands.getBands());
    // });


});