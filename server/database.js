const mongoose = require('mongoose');
const URL = 'mongodb+srv://teamreload:treload2021@cluster0.t2gcs.mongodb.net/dbnomina?retryWrites=true&w=majority';

mongoose.connect(URL)
    .then(db => console.log('Database Conectada.'))
    .catch(error => console.error(error));

module.exports = mongoose;