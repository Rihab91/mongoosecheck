const express =require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const port=process.env.PORT
app.use(express.json())
// Connect to the MongoDB Atlas database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err))
app.use("/api",require('./Routes/FoodRoute'))
app.listen(port,(err)=>{
    err ? console.log(err) : console.log('server is running in port:',port)
})