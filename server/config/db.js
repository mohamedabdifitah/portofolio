import mongoose from 'mongoose';

/*
    connexting mongodb
*/

export const ConnectDB = async () =>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_DB_URI)
    console.log(conn.connection.host)
  } catch(err){
    console.log(err)
  }
}