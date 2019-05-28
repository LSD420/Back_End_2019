// config/passport.js
var mysql = require('mysql')
// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// MySQL connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha8'
});

connection.connect();


console.log("MySQL connection created at %s with database: %s", connection.config.host, connection.config.database);

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        // select from users where id =        
        connection.query("SELECT * FROM ficha8.users WHERE id = " + id,function (err, rows) {
            done(err, rows[0]);
        })
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists            
        }));
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) { // callback with email and password from our form        
            connection.query('SELECT * FROM ficha8.users WHERE email = ? AND password= ?' , [email,password] , function (err, rows,fields) {
                if (!rows.length) {
                    return done(null, false, req.flash('LoginMessage', 'No user found.'));
                }
                else if (!(rows[0].password == password)){
                    return done(null, false, req.flash('LoginMessage', 'Oops! Wrong password.'));
                }else {
                console.log(rows[0]);
                return done(null, rows[0]);
                }
            })
        }));
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) { // callback with email and password from our form        
            connection.query("INSERT INTO Users('password','email') VALUES ('" + password + "','" + email + "'", function (err, result) {
                if (err) throw err;
                return done(null, email);

            })
        }));
};