import mongoose from 'mongoose';

const Connection = async (DB_URL) => {
    // const URL = `mongodb://${username}:${password}@cluster0.oaffh4u.mongodb.net/`
    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;