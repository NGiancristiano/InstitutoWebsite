function CoursesPage () {
    const courses =[
        {
            name:'Ingles',
            teacher:'Estela'
        },{
            name:'Japones',
            teacher:'Estela'
        },{
            name:'Aikido',
            teacher:'Matias'
        },{
            name:'Italiano',
            teacher:''
        }

    ]
    return (
        <div>
            <h2>Cursos</h2>
            <ul>
                {courses === 0 && <p>Cargando...</p>}
                {
                    courses.map((course,i) => {
                        return(
                            <li key={i}>
                                <h3>{course.name}</h3>
                                <h4>Profesor: {course.teacher}</h4>
                                <p>Descripcion: In anim Lorem Lorem dolor. Aliqua consequat aliqua velit ipsum exercitation voluptate id do voluptate culpa exercitation. Eiusmod ex laboris veniam aliqua labore sint. Magna ex anim fugiat nulla esse sunt consequat sunt. Do elit irure ut excepteur sit duis.</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default CoursesPage