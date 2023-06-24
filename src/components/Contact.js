import React, { useState } from 'react';
import courses from '../database/cursos.json'

function ContactForm({courseID}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [course,setCourse] = useState('')
  console.log(courseID)
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      name: name,
      email: email,
      course: course,
      message: message
    }
    console.log(formData)
    // Aquí puedes realizar cualquier lógica adicional, como enviar el formulario a un servidor.

    // Reiniciar los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
    setCourse('');
  };

  return (
    <div>
      <h2>Contacto</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='course'>Curso:</label>
        <select id='course' 
        value={course} 
        onChange={(e)=> setCourse(e.target.value)}
        >
          <option value=''>Seleccione un curso</option>
          {
            courses.map(course => {
              return(
                <option key={course.id} value={course.id}>
                {course.name}
                </option>
              )
            })
            }
        </select>
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
  
}

export default ContactForm;
