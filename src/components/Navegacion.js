import {Link} from 'react-router-dom'

function Navegacion (props) {
    return(
        <nav>
          <ul>
            {props.items.map((item,i) => {
                return(
                    <li><Link to={item.path} key={i}>{item.name}</Link></li>
                )
            })}
          </ul>
        </nav>
    )
}
export default Navegacion
