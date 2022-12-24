const mongoose = require('mongoose');

module.exports = (dbname) => {
    mongoose.connect(`mongodb://127.0.0.1/${dbname}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
        .then(() => console.log(`Successfully connected to ${dbname}`))
        .catch(err => console.log(err));
}