import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../database.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // tratando caso não encontre
    if(!products || products.length === 0){
        res.status(404).json({message: "Produto não encontrado..."})
    }

    res.status(200).json(products)
}