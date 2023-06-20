
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Presentation from './components/Presentation';
import Courses from './components/Courses';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section>
          <Presentation/>
        </section>
        <section>
          <Courses courses={["Ingles","Japones","Aleman","Frances","Portugues","Sumie","Aikido","Karate"]}/>
        </section>
        <section>
          <About/>
        </section>
        <ContactForm/>
      </main>
      <Footer/>
    </div>
  );
}



export default App;
