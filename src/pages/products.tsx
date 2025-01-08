import { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
    return (
    <>
        <Head>
            <title>Nossos Produtos</title>
            <meta name="description" content="Conheça todos os nossos produtos" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Adiconando o contuedo  */}
        <main>
            <h2>produtos</h2>
        </main>
    </>
)}

export default Products