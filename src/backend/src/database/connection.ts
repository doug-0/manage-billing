import mongoose from 'mongoose';
import config from './config';

const connectToDataBase = () => {
  try {
    mongoose.connect(config.mongo.url);
    console.log('Database connected!');
  } catch (error) {
    console.log(error);
  }
};

export default connectToDataBase;
