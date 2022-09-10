import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './config';

dotenv.config();

const connectToDataBase = () => {
  try {
    mongoose.connect(config.mongo.url, {
      dbName: process.env.DB_NAME,
    });
    console.log('Database connected!');
  } catch (error) {
    console.log(error);
  }
};

export default connectToDataBase;
