const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 3001
const mongoose=require('mongoose')
app.use(cors())
app.use(express.json())

const mernModel=require('./models/data')


mongoose.connect('mongodb://localhost:27017/lnt').then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


app.get('/getdata', async (req, res) => {
  
    const data= await mernModel.find()
    console.log(data);
    res.send(data)
  res.json(data)
})



app.get('/', (req, res) => {
  res.send('Hello Developers!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})