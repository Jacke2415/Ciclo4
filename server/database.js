const mongoose = require("mongoose");

const URL = 'mongodb+srv://teamreload:treload2021@cluster0.t2gcs.mongodb.net/dbnomina?retryWrites=true&w=majority';

(async () => {
    try {
        const db = await mongoose.connect(URL, {
            useNewUrlParser: true, 
            useUnifiedTopology:true,
        });
        console.log(`Connection is established`, db.connection.host);
        }catch(error) {
            console.error(error);
        }
    })();

