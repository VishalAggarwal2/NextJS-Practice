import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
export default async          function connectdb(){
    try {
        const connection = await mongoose.connect(process.env.URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        console.log("Connected successfully to MongoDB");
      } catch (error) {
        console.error("Error connecting to MongoDB:",error.message);
      }
}
