const express = require('express');
const app = express();
const routerApi = require('./routes/index')

app.get('/', (req, res)=>{
    res.send(' funcionando el get')
})

routerApi(app)

app.listen(3000, ()=>{
    console.log('funcionando como debe de ser    ')
})