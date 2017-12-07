// Dependencies

var express = require('express');

var bodyParser = require('body-parser');

var pdf = require('express-pdf');

// Init app
var app = express();

// Allow requests from other domains
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

// Set public directory
app.use(express.static('public'));

// Use PDF
app.use(require('express-pdf'));

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Set templating engine
app.set('view engine', 'pug');

// Define root route
app.get('/', function(req, res){
  res.status(200).render('index');
});

app.get('/propuesta', function(req, res){

  var _biz = req.query.biz;
  var _attn = req.query.attn;

  res.status(200).render('propuesta', { empresa: _biz,
                                        contacto: _attn
                                      });

});

/*app.post('/gen_prop', function(req, res){
  res.redirect('/propuesta');
});*/


// PDF generation functionality
app.use('/propuesta-pdf', function(req, res){
    res.pdfFromHTML({
        filename: 'generated.pdf',
        htmlContent: '<html><body><h1>PDF DE PRUEBA</h1></body></html>',
        options: {"format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                  "orientation": "portrait"
                }
    });
});


// Start server
app.listen(3000);

console.log('API is running on port 3000');
