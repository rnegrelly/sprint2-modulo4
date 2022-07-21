
import { Database } from "../infra/Database.js";

class DbMetodos {

    //Método para adicionar dicas na base de dados.
    static adicionarDica (dica){

        Database.Dicas = [...Database.Dicas, dica]
        return Database.Dicas;
    }

    //Método para mostrar apenas uma dica ao requerente.
    static mostrarDica(){

        let dicaunica = Database.Dicas[Math.floor(Math.random() * Database.Dicas.length)]

        return dicaunica
}}

export default DbMetodos;