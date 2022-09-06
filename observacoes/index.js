const express = require('express')
const app = express()
app.use(express.json())//não esquecer que json é uma funçao

//localhost:5000/lembretes/123456/observacoes
//!!requisição em porta diferente do serviço lembretes!!
app.post('/lembrete/:id/observacoes',(req,res) =>{//criar um placeholder para nçao tornar a url estatica, o placeholder é " : "

})

//localhost:5000/lembretes/abcd/observacoes
app.get('/lembretes/:id/observacoes',(req,res)=>{

})

app.listen(5000, ()=>{console.log('Observações. Porta 5000')})