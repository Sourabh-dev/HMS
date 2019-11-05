const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const session = require('express-session');
const sessionConfig = require('./config/session');
//Initializing Express app
const app = express();

app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({
    extended: true
}))

// Setting up Port
const PORT = process.env.PORT || 5000;

// Setting up Template engine
app.engine('hbs', handlebars({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname+'/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Setting up public path
app.use(express.static(path.join(__dirname, '/public')));

//DB config
const db = require('./config/database')
db.authenticate()
    .then(() => console.log('connected'))
    .catch((err) => console.log('Error Occoured', err))


//Routes
const adminRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth')
app.get('/', (req, res) => {
    req.session.user = {};
    req.session.userId = null;
    res.render('home');
});
app.use('/admin', adminRoutes);
app.use('/', authRoutes);
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`));