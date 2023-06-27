import 'dotenv/config'
import mongoose from "mongoose";
const { URL } = process.env 

mongoose.connect(`${URL}`)
.then(db => console.log(`DB Mongo is connected to URL: ${URL}`)
)
.catch(err => console.error(err, `URL: ${URL}`)
)


    