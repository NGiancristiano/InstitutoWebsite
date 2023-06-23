import {Routes,Route} from 'react-router-dom'
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CoursesPage from './components/CoursesPage';
import AddCourse from './components/AddCourse';
import NotFound from './components/NotFound';
import CourseDetail from './components/CourseDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/courses' element={<CoursesPage/>}/>
          <Route path='/addcourse' element={<AddCourse/>}/>
          <Route path='/course/:id' element={<CourseDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        
      </main>
      <Footer/>
    </div>
  );
}



export default App;
