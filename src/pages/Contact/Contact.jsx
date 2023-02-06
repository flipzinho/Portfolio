
import { LinkComponent } from '../../components/LinkComponent/LinkComponent'
import { Text } from '../../components/Text/Text'
import './Contact.css'
export const Contact = () => {
    return(
        <section className="contact">
            <div className='container'>
            <h2 className='title'>
                Contact me! 
            </h2> <br />
            <Text text="e-mail: felipe.afonsobarbosa@gmail.com"/>
            <Text text="Phone: +55 (11) 97665-6681"/>
            
            <LinkComponent textLink='Linkedin:' link='https://www.linkedin.com/in/felipe-ribeiro-54b5671b0/' text='https://www.linkedin.com/in/felipe-ribeiro-54b5671b0/'/>
            </div>
            
            <div>

            </div>
        </section>
    )
}