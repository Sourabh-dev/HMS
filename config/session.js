const MAX_TIME = 1000*60*60*2;  // Two hours

module.exports = {
    name: 'SESS',
    resave: false,
    saveUninitialized: false,
    secret: '521b92f9a80751ebd99387eb74126f6a',
    cookie : {
        maxAge: MAX_TIME,
        sameSite: true,
        secure: false,
    }
}