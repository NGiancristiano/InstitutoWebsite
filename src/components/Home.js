import ContactForm from './Contact';
import Presentation from './Presentation';
import About from './About';
import CoursesPage from './CoursesPage';


function Home() {
    return (
        <div>
            <section>
                <Presentation/>
            </section>
            <section>
                <CoursesPage />
            </section>
            <section>
            <ContactForm/>
                
            </section>
            <section>
            <About/>
            </section>
            
        </div>
    )
}
export default Home