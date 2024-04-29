require('dotenv').config();

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

// Use environment variables for MongoDB URL
const MongodbUrl = process.env.NODE_ENV === 'production' ?
  process.env.MONGODB_URL_PRODUCTION :
   (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb://localhost:27017/medico');
  

module.exports = {
  Port: Port,
  MongodbUrl: MongodbUrl
};
