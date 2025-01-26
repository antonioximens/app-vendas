// src/components/ProductCard.tsx

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button, Card, CardBody, CardSubtitle } from "react-bootstrap";
import { ProductType } from "../../service/products";
import SuccessToast from "../successToast/SuccessToast";
import { useCart } from "../../hooks/useCart";

interface ProductCardProps {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { id, name, imageUrl, price } = product
  const {addProduct} = useCart()
  return (
    <>
      <Card>
        <Link href={`/products/${id}`}>
          <Image className="card-img-top" src={imageUrl} alt="Product" height={500} width={600} layout="responsive"/>
        </Link>

        <CardBody>
          <Link href={`/products/${id}`}>
            <h5 className="card-title" style={{ cursor: 'pointer' }}>
              {name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted" as="h6">
            R$ {price}
          </CardSubtitle>

          <Button
            color="dark"
            className="pb-2"
            full-Width
            onClick={() => {
              addProduct(product)
              setToastIsOpen(true)
              setTimeout(() => setToastIsOpen(false), 1000 * 3)
            }}
          >
            Adicionar ao Carrinho
          </Button>

        </CardBody>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  )
}

export default ProductCard