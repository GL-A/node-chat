const express = require('express')
, bodyParser = require('body-parser')
, app = express()
, port = 3000
, controller = require('./controllers/messages_controller');

app.use( bodyParser.json() );

app.use( express.static( __dirname + '../public/build'))

app.get( '/api/messages/', controller.read)
app.put( '/api/messages/:id', controller.update)

app.post( '/api/messages/', controller.create)

app.delete( '/api/messages/:id', controller.delete)

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
