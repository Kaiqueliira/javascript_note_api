const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection Succesful')
}).catch(err => console.error(err));