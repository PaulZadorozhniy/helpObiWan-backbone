var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./public')).listen(3000, function() {
  console.log('Listening on port:* 3000');
});