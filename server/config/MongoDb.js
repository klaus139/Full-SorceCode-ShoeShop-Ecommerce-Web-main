import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config()

// export const connectDatabase = async() => {
//   try{
//     await mongoose.connect(process.env.MONGO_URL).then((data)=>{
//         console.log(`Database connected with host: ${data.connection.host}`)

//     })

//   }catch(err){
//     console.log(err.message);

//   }
// };

// export default connectDatabase;