// trabalhando com api
// listar todos os produtos
// src/services/products.ts

export type ProductType = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    inStock: number
  }

  // listar todos os produtos
  export const fetchProducts = async () => {
    const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`).then(res => res.json())
    return products
  }
  
  // listar um unico produto
  export const fetchProduct = async (id: string | number) => {
    const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/product/${id}`).then(res => res.json())
    return product
  }