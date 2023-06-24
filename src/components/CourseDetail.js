import courses from '../database/cursos.json'
import Contact from './Contact'
import { useParams } from 'react-router-dom'


function CourseDetail () {
    console.log()
    const params = useParams()

    const courseToDetail = courses.find(course => course.id === params.id)

    return(
        <div>
            <img src={courseToDetail.image} alt={courseToDetail.id} className='image-detail'/>
            <h2>{courseToDetail.name}</h2>
            <p>Profesor:{courseToDetail.teacher}</p>
            <p>Descripcion:{courseToDetail.description}</p>
            <Contact courseID={courseToDetail.id}/>
        </div>
    )

}
export default CourseDetail