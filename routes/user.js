const express = require('express');
const app = express();
const router = express.Router()


  

router.get('/:id', (req, res)=>{
  const { id } = req.params

  res.json([
    {
    id:0,
    "names": "sofia",  
    apellido: "perez",
    edad: 21
  },
  {
    id: 1,
    nombre: "maria",
    apellido: "urbano",
    edad: 10
  }
])
})

router.post('/', (req, res)=>{
  const body = req.body;
  res.status(201).json({
    mesage:"created",
    data:body
  })
})
router.patch('/:id', (req, res)=>{
  const { id } = req.params
  const body = req.body;
  res.json({
    mesage:"update",
    data:body,
    id
  });
});

router.delete('/:id', (req, res)=>{
  const { id } = req.params
  res.json({
    mesage:"deleted",    
    id
  });
});
module.exports = router