var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true });

module.exports = {mongoose};
