/* jshint node: true */

'use strict';
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    models = require('./models/tvshow')(app, mongoose),
    cors = require('cors'),
    colors = require('colors'),
    port = process.env.PORT ||3000,
    database = require('./config/database'),
    TVShowCtrl = require('./controllers/tvshows');

// cambios nueva funcionalidad
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();


app.use(express.static(__dirname + '/app'),function(req, res, next) {
  console.log('url '+req.originalUrl); // '/admin/new'
  console.log('path '+req.path+' '); // '/new'
  next();
});



app.use(router);



// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);


tvshows.route('/tvshows/:id')
    .get(TVShowCtrl.findById)
    .put(TVShowCtrl.updateTVShow)
    .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);



mongoose.connect(database.url, function (err) {
    if (err) {
        console.log(colors.red('ERROR: Fallo en la conexion a la base de datos. %s '), err);
    } else {
        console.log(colors.yellow('conecectado a la base de datos %s.'),database.url);
    }
});


app.listen(port, function () {
    console.log(colors.yellow('Servidor node en http://localhost:%d'),port);

});
