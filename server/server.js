import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT
const app = express()


app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended : true}))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

await connectDB()

app.get("/" , (req, res) => {
    res.send("API WORKING")
})

app.listen(PORT , () => {
    console.log('Server is running on ' + PORT) 
})