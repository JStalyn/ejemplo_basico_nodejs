const express = require ('express');
const app = express()
const userApi = require('./routes/index')

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('wellcome to my word')
})
userApi(app)
app.listen(3000, ()=>{
    console.log('working sin port')
    
})
