const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
// const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 200000, // 5 minutes = 300000
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// ** Set us up with custom middleware!! **
// Create a session
app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ 
  defaultLayout: 'main',
  helpers: {
      compare: function(operand_1, operator, operand_2, options) {
        var operators = {
         'eq': function(l,r) { if (l == r) return true },
         'noteq': function(l,r) { if (l != r) return true },
         'gt': function(l,r) { return Number(l) > Number(r); },
         'or': function(l,r) { return l || r; },
         'and': function(l,r) { return l && r; },
         '%': function(l,r) { return (l % r) === 0; }
        }
        , result = operators[operator](operand_1,operand_2);
      
        if (result) return options.fn(this);
        else  return options.inverse(this);
      }
  } 
});

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

// For path finding set up this middleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up a path to use all public references for instances for a public folder
app.use(express.static(path.join(__dirname, 'public')));

// Sets up a path to use the images from the (public folder) / (images file).
app.use("/images", express.static(path.join(__dirname, "/public/images")));

// Create the routes controller
app.use(routes);

// Create the server to run the application
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening to: http://localhost:3001/'));
});