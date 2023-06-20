function Courses (props) {
    return (
        <div>
            <h2>Próximos cursos</h2>
            <ul>
               {props.courses.map((course,i)=>{
                return(
                    <li key={i}>
                        {course}
                    </li>
                )
               })}
            </ul>
        </div>
    )
}
export default Courses