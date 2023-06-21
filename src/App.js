import {Routes,Route} from 'react-router-dom'
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CoursesPage from './components/CoursesPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/courses' element={<CoursesPage/>}/>
        </Routes>
        
      </main>
      <Footer/>
    </div>
  );
}



export default App;
