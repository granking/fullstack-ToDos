const dotenv = require('dotenv');

//Utils
const { db } = require('./utils/database');

//Express app
const { app } = require('./app');
const { User } = require('./models/user.model');

dotenv.config({ path: './config.env'});

// Promise
db.sync()
.then(() => {
    console.log('Database connected');
    startServer();
    //Query
    //SELECT * FROM users
    return User.findAll();
})
.then(res => {console.log(res);
})
.catch(err => console.log(err));

const startServer = () => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log('To Do api running!');
    });
};