var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use(gzippo.staticGzip("" + __dirname + "/app/views", {prefix:'/views'}));
app.use(gzippo.staticGzip("" + __dirname + "/app/styles", {prefix:'/styles'}));
app.use(gzippo.staticGzip("" + __dirname + "/app/fonts", {prefix:'/fonts'}) );
app.use(gzippo.staticGzip("" + __dirname + "/app/files", {prefix:'/files'}));
app.use(gzippo.staticGzip("" + __dirname + "/bower_components", {prefix:'/bower_components'}));

app.listen(process.env.PORT || 5000);