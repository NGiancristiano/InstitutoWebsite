function Navegacion (props) {
    return(
        <nav>
          <ul>
            {props.items.map((item,i) => {
                return(
                    <li><a href="/" key={i}>{item}</a></li>
                )
            })}
          </ul>
        </nav>
    )
}
export default Navegacion
