import mongoose from 'mongoose';
import config from '../config';
import Wish from '../models/Wish';
import Room from '../models/Room';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    console.log('Mongoose Connected ...');
    Wish.createCollection().then(function (collection) {
      console.log('movie collection created');
    });
    Room.createCollection().then(function (collection) {
      console.log('review collection created');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
