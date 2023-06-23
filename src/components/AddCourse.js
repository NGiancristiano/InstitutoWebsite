import React, { useState } from 'react';
import courses from '../database/cursos.json'

function AddCourse() {
    const [data,setData] = useState(courses);
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let newID = parseInt(courses[courses.length-1].id,10)+1
    let newCourse = {
        id: newID,
        name: name,
        teacher: teacher,
        description: description
    }
    setData([...data,newCourse])
    setName('');
    setTeacher('');
    setDescription('');

    
     // Enviar los datos al backend para guardarlos en el archivo JSON
  /* fetch('/guardar-cursos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([data])
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.message);
      // Manejar cualquier lógica adicional después de guardar los datos
    })
    .catch(error => {
      console.error('Error al guardar los datos:', error);
      // Manejar cualquier error que ocurra durante el proceso de guardado
    });*/
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Curso:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Profesor:</label>
        <input
          type="text"
          id="teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Descripcion:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default AddCourse;
