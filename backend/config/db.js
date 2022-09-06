import mongoose from 'mongoose';

const dbconnect = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParsel: true,
            useCreateIndex: true
        })
        console.log(`Mongodb Conected: ${conn.connect.host}`)
    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1)

    }
}

export default dbconnect;