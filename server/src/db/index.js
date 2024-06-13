import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('MONGO_DB CONNECTION FAILED: \n', err);
        process.exit(1);
    }
};

export default connectDB;
