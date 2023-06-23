import { Link , useParams} from 'react-router-dom'
import courses from '../database/cursos.json'
import { useEffect, useState} from 'react'

function CoursesPage () {
    const dato = useParams()
    console.log(dato)
    const [jsonData,setJsonData] = useState([])
    const charLimit = 100

    useEffect(()=>{
        setJsonData(courses)
        console.log(jsonData)
        console.log('Actualizado')
    },[jsonData])

    
    return (
        <div>
            <h2>Cursos</h2>
                <div  className='courses-section'>
                {jsonData.length === 0 && <p>Cargando...</p>}
                {
                    jsonData.map(course => {
                        return(
                    <div className="card">
                        <div className="face front">
                        <img
                            src={course.image}
                            width="16"
                            height="12"
                            alt="Reino Unido"/>
                            <h3>{course.name}</h3>
                        </div>
                        <div className="face back">
                            <h4>{course.name}</h4>
                            <p>Descripcion:{
                        course.description.length > charLimit ? 
                        course.description.substring(0,charLimit)+"..." : course.description }
                        </p>
                            <div className="link-course">                               
                                <Link to={`/course/${course.id}`}>Consultar</Link>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }   </div>        

        </div>

    )
}
export default CoursesPage