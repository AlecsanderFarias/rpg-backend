import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();


const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_LINK, MONGO_DB } = process.env

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_LINK}/${MONGO_DB}?authSource=admin`


const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}

const connect = async () => {
  return mongoose
    .connect(uri, config)
    .then(() => console.log('[API] MongoDB connected!'))
    .catch((err) => console.log('[API] Erro on connect DB', err))
}

export default {
  connect,
  uri,
  config,
}

