const mongoose = require("mongoose");
require("dotenv").config();

const URL = "mongodb+srv://" + 
process.env.DB_USERNAME +
":" +
process.env.DB_PASSWORD +
"@" +
process.env.DB_HOST +
"/" +
process.env.DB_NAME +
"?retryWrites=true&w=majority"

mongoose
  .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conected to Mongo at: " + process.env.DB_USERNAME);
  })
  .catch((err) => console.log(err));

/* const URL = 'mongodb+srv://teamreload:treload2021@cluster0.t2gcs.mongodb.net/dbnomina?retryWrites=true&w=majority';

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

 */