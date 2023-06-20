import Navegacion from "./Navegacion";
import logo from "../assets/images/Shigue.jpg"

function Header() {
    return(
        <header>
            <div>
                <img src={logo} width={"100px"}/>
                <h1>Shigue, espacio multicultural</h1>
            </div>
                <Navegacion items={["Inicio","Cursos","Sobre nosotros","Contacto"]}/>
        </header>
    )
}

export default Header