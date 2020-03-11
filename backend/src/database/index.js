import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongoConnect();
  }

  async mongoConnect() {
    mongoose.Promise = global.Promise;

    await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
