
import { Button } from '../../components/Button/Button'
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
            <Text text="You can also email-me clicking on button below!"/>
            </div>
            <Button/>
            <div>

            </div>
        </section>
    )
}