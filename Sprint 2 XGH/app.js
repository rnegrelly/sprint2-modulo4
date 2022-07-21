import express from "express";
import readline from "readline";

const rl = readline.createInterface({    
    input: process.stdin,
    output: process.stdout
})

const app = express();
const port = 3001


var dicas = []
//var dica = dicas[Math.floor(Math.random() * dicas.length)]

app.get("/", (req, res) => {
    res.send(`<h3>Olá! Bem vindo a aplicação Dev Random Tips.</h3> 
    <p>Para inseir dicas click <a href="http://localhost:3001/create"> aqui </a> e retorne ao seu prompt </p>
    <p>Digite suas dica, uma por vez, e aperte Enter.</p>
    <p>Para encerrar digite sair e click <a href="http://localhost:3001/tip"> aqui </a> para receber sua dica aleatória.</p>`)
});

app.get("/create", () => {

    rl.question('Quais dicas você tem para dar? ', (resposta) =>{
    
        dicas.push(resposta);
        rl.setPrompt("Alguma outra? Se não, digite 'sair'. ")
        rl.prompt()  
    })

})

rl.on('line', (input) => {
    if(input.trim() == "sair"){
        
        app.get("/tip", (req, res) => {

            res.send (dicas[Math.floor(Math.random() * dicas.length)])
                  
        })
        console.log(`click aqui para ver sua dica aleatória: http://localhost:3001/tip`)
        //console.log(dicas[Math.floor(Math.random() * dicas.length)])
    } else {

        dicas.push(input);
        rl.prompt();  
    }
    
})


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
}); 
