const express = require('express');
const routes = require('./routes');
const PORT = 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log('yo it be alec')
})