import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";
import style from "./style.module.css"
import { useRouter } from "next/router";

const Header = () => {
    // descobrir a rota que o cliente esta
    const router = useRouter()
    return (
        // criando o menu da página
        <Navbar bg="dark" variant="dark">
            <Container className={`justify-content-between my-2`}>
                <Link href="/" className={style.no_TextDecoration}> Home </Link>
                <Nav>
                    <Link href="/products" className={style.no_TextDecoration}> <span className={router.pathname === "/products" ? style.active : ""}>Produtos</span> </Link>
                    <Link href="/cart" className={style.no_TextDecoration}> <span className={router.pathname === "/cart" ? style.active : ""}>Carrinho</span> </Link>    
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
