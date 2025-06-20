// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    // {{insert code}}
    try{
        await client.connect();
        
        // Task 2: Connect to database giftDB and store in variable dbInstance
        //{{insert code}}
        dbInstance=client.db('giftDB')

        return dbInstance;
        res.send("successfully connected to the database")
    }catch(error){
        res.status(401).json({message:"conenction failed"})
    }
    // Task 3: Return database instance
    // {{insert code}}
}

module.exports = connectToDatabase;
