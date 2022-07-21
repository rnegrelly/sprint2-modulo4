
import { Database } from "../infra/Database.js";

class DbMetodos {

    static adicionarDica (dica){

        Database.Dicas = [...Database.Dicas, dica]
        return Database.Dicas;
    }

    static mostrarDica(){

        let dicaunica = Database.Dicas[Math.floor(Math.random() * Database.Dicas.length)]

        return dicaunica
}}

export default DbMetodos;