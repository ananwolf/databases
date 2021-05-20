// exported to controllers
var db = require('../db');

module.exports = {
  getAll: function (callback) {


    // db.connection.query('SELECT * FROM messages;', (err, data) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log(data);
    //     callback(null, data);
    //   }
    // });

  }, // a function which produces all the messages
  create: function () {

  } // a function which can be used to insert a message into the database
};


/*
data = {
  message#1: {
    id: id,
    message: message,
    user_ID: user_ID,
    Room_ID: Room_ID
  },
  message#2...
}
*/