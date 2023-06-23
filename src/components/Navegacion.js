import {Link} from 'react-router-dom'

function Navegacion (props) {
    return(
        <nav>
          <ul>
            {props.items.map((item,i) => {
                return(
                    <li key={item+i}><Link to={item.path} >{item.name}</Link></li>
                )
            })}
          </ul>
        </nav>
    )
}
export default Navegacion
