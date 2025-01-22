// src/components/ProductsList.tsx
import React from "react"
import { Col, Row } from "react-bootstrap"
import { ProductType } from "../../service/products"
import ProductCard from "../cardProduts/ProductCard"

interface ProductListProps {
  products: ProductType[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {

  return (
    <>
      <Row className="g-5">
        {products.map(product => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProductCard
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductsList

