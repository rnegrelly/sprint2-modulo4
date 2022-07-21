import DicaModel from "../models/DicaModel.js";
import DbMetodos from "../utils/DbMetodos.js";

class Dicas{

    static rotas(app){

        //rota que mostra aleatóriamente apenas uma das dicas 
        app.get("/tips", (req, res)=>{

            const response = DbMetodos.mostrarDica();
            res.status(200).json(response);
        })

        //rota que possibilita a criação de objetos com as "dicas"
        app.post("/create", (req, res)=>{
            const dica = new DicaModel(...Object.values(req.body));
            const response = DbMetodos.adicionarDica(dica);
            res.status(200).json(response);
        })
    }
}

export default Dicas;