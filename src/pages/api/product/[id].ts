import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../../database.json"

export default function handler( req: NextApiRequest, res: NextApiResponse){

//  o query extrai parametro da rota
    const { id } = req.query

    // verificando o id 
    const product = products.find(produto => produto.id === Number(id))

    if(!product) {
        res.status(404).json({message: "Produto solicitado não encontrado..."})
    }

    res.status(200).json(product)
}