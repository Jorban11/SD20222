//instalar nodemon e express

const express = require('express')
const app = express()
//estamos aplicando um middleware
app.use(express.json())/*permite que o corpo da resposta seja retornado como json, que deve ser executada antes dos comandos como get e post*/ 

const lembretes = {}
let cont = 0

//GET obter a lista de lembretes
//localhost: 4000/lembretes
//---------------------
app.get('/lembretes',(req,res)=>{//request & response(nomes seguindo boas praticas)
    res.send(lembretes)
})
                     
//POST ou PUT cadastrar um lembrete novo(POST é mais apropriado)
//localhost:4000/lembretes
//---------------------
// {texto: 'Fazer café'}
app.post('/lembretes',(req,res)=>{//request & response
    cont++
    const texto = req.body.texto
    /* OU como na apostila
    const{  texto   } = req.body
    */
   lembretes[cont]= {
    cont,
    texto
   }//por existir dois nomes iguais, o JS permite que o nome dentro de um json, se for igual ao nome de uma variavel fora do json, 
    //apenas colocando o nome sera equivalente a fazer 'cont: cont' dentro da json
    res.status(201).end()
})

//---------------------
app.listen(4000, ()=> console.log('Lembretes. Porta 4000'))

//essas funções do express permitem utilizar funções como segundo parametro de suas funções

/*
Seguir aula utilizando POSTMAN ou o addon dentro do VSCode que nao pode ser usado na versao web chamado 
Thunder Client

criar um script no package json do lembretes: "start": "nodemon index.js"

No Postman ou Thunder Client:
$abrir uma requisição GET no endereço localhost:4000/lembretes
$abrir uma requisição POST no endereço localhost:4000/lembretes e aplicar, no body, um json:
{
    "texto":"Fazer cafe!"
}


*/