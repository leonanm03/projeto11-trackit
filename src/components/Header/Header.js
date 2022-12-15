import { Link } from "react-router-dom";
import { ContainerHeader, Teste } from "./headercss";




export default function Header() {

    return (
            <ContainerHeader>
                <Link to={"/"}> <h1>Trackit</h1></Link>
                <img src="https://www12.senado.leg.br/institucional/gestaoboaspraticas/imagens/imagem-teste/image" alt="img alternativa" />
            </ContainerHeader>
    )
}