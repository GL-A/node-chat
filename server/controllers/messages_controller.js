let messages = [{
"id": 0,
"text": "some text 3",
"time": "2017-07-18T21:00:01.751Z"
},
{
"id": 1,
"text": "some text 33424",
"time": "2017-07-18T21:00:06.832Z"
}];
let id = 0;

module.exports = {
  create: ( req, res ) => {
    const { text } = req.body;
    const time = new Date();
    messages.push({ id, text, time });
    id++;
    res.status(200).send( messages );
  },

  read: ( req, res ) => {
    res.status(200).send( messages );
  },

  update: ( req, res ) => {
    const { text } = req.body;
    const updateID = req.params.id;
    console.log( updateID );
    const messageIndex = messages.findIndex( message => message.id == updateID );
    let message = messages[ messageIndex ];

    messages[ messageIndex ] = {
      id: message.id,
      title: text || message.text,
      time: message.time
    };

    res.status(200).send( messages );
  },

  delete: ( req, res ) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex( message => message.id == deleteID );
    messages.splice(messageIndex, 1);
    res.status(200).send( messages );
  }
};
