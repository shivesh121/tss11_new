var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
// var cache = require('nocache');
var app = express();



app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));
app.use(flash());


var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 306824626738301,
    clientSecret: 'f1dfa6ab73c2e108bd070d883e8ddddb',
    callbackURL: "http://localhost:3000/user"
    // profileFields: ['email','first_name','last_name','gender','link', 'profileUrl']
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
    console.log(profile._json.bio);
  }
));

app.get("/", function(req, res){
	console.log(req.headers);
	res.render("index");
});

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/user',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

// app.use(require("./config/routes"));
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Running");
});
