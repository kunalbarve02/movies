const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.DB_URI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
)
.then(() => console.log('Connected to DB'))
.catch((err:Error) => console.log(err));

export default connection;
