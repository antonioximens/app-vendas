// pages/cart.tsx

import CartTable from "@/components/cartTable/CartTable";
import CartTotal from "@/components/cartTotal/CartTotoal";
import Header from "@/components/header/Header";
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* Criando o menu de navegação */}
        <Header />
      <h1>
        Carrinho
      </h1>
      <CartTable />
      <CartTotal />
    </>
  )
}

export default Cart