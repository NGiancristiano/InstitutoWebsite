import ContactForm from './Contact';
import Presentation from './Presentation';
import Courses from './Courses';
import About from './About';


function Home() {
    return (
        <div>
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
        </div>
    )
}
export default Home