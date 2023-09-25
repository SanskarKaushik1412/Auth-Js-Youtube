import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection


        connection.on('connected', () => {
            console.log("connected mongo successfully!")
        })

        connection.on('error', (err) => {
            console.log("mongoDB connection error, make sure mongoDB is running. ", err)
        })

    } catch (error) {
        console.log("Sometihing goes wrong")
    }
}