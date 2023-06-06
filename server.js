const express = require('express');
const controllers = require('./controllers');
const PORT = 3001;
const app = express();
const sequelize = require('./config/connection');
app.use(controllers);

//Connect to the DB and THEN run server!
sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log('yo it be alec')
})
});
