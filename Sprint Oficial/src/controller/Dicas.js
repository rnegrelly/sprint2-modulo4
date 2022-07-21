import DicaModel from "../models/DicaModel.js";
import DbMetodos from "../utils/DbMetodos.js";

class Dicas{

    static rotas(app){
        app.get("/tips", (req, res)=>{

            const response = DbMetodos.mostrarDica();
            res.status(200).json(response);
        })

        app.post("/create", (req, res)=>{
            const dica = new DicaModel(...Object.values(req.body));
            const response = DbMetodos.adicionarDica(dica);
            res.status(200).json(response);
        })
    }
}

export default Dicas;