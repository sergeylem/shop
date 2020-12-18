// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
		});

		console.log(`MongoDB Connected...${conn.connection.host}`.cyan.underline);
	} catch (err) {
		console.error(`Error: ${err.message}`.red).underline.bold;
		// Exit process with failure
		process.exit(1);
	}
};

// module.exports = connectDB;
export default connectDB
