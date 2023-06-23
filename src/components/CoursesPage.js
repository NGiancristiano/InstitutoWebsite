
import courses from '../database/cursos.json'
import { useEffect, useState } from 'react'

function CoursesPage () {
    const [jsonData,setJsonData] = useState([])
    
    useEffect(()=>{
        setJsonData(courses)
        console.log(jsonData)
        console.log('Actualizado')
    },[jsonData])
    return (
        <div>
            <h2>Cursos</h2>
            <ul>
                {jsonData.length === 0 && <p>Cargando...</p>}
                {
                    jsonData.map((course) => {
                        return(
                            <li key={course.id}>
                                <h3>{course.name}</h3>
                                <h4>Profesor: {course.teacher}</h4>
                                <p>Descripcion: {course.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default CoursesPage