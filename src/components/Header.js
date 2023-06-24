import Navegacion from "./Navegacion";
import logo from "../assets/images/Shigue.jpg"

function Header() {
    return(
        <header>
            <div>
                <img src={logo} alt="logo" width={"100px"}/>
                <h1>Shigue, espacio multicultural</h1>
            </div>
                <Navegacion items={[{name:"Inicio",path:'/'},{name:"Cursos",path:'/courses'},{name:"Sobre Nosotros",path:'/about'},{name:"Contacto",path:'/contact'}]}/>
        </header>
    )
}

export default Header