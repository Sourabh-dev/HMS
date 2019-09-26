const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Initializing Express app
const app = express();
// Setting up Port
const PORT = process.env.PORT || 5000;

//DB config
const db = require('./config/database')
db.authenticate()
    .then(() => console.log('connected'))
    .catch((err) => console.log('Error Occoured', err))


//Routes
const adminRoutes = require('./routes/admin')
app.get('/', (req, res) => {
    res.send('Hola!');
});
app.use('/admin', adminRoutes);
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`));