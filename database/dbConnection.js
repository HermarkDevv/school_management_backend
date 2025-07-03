import moongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const dbConnection = async () => {
    try {
        await moongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
}

