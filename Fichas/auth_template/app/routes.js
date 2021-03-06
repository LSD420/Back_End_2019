module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // 1 - show the login form GET
    // render the page and pass in any flash data if it exists 
    app.get('/login',function (req,res) {
        res.render('login.ejs',{message : req.flash('LoginMessage')})
    })

    // 2 - process the login form POST
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages 
    app.post('/login',passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));



    app.get('/custom-login',function (req,res,next) {
            passport.authenticate('local-login',function(err,user,index){
                if(err) return next(err);
                if(!user){

                }

            })
    })
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // 3 - show the signup form
    // render the page and pass in any flash data if it exists GET
    app.get('/signup',function (req,res) {
        res.render('signup.ejs',{message : req.flash('SignUpMessage')})
    })
    // 4- process the signup form POST
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages
    app.post('/signup',passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // 5 - show the profile page GET
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn,function (req,res) {
        res.render('profile.ejs',{
            user: req.user
        })
      })
    // get the user out of session and pass to template

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout',function(req,res){
        req.logout();
        res.redirect('/');
    })
    // 6 - logout user GET
    // redirect to root
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    else res.redirect('/');
}