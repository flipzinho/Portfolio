import './About.css'
import perfil from '../../assets/profile.jpg'
import { Text } from '../../components/Text/Text'
import { Title } from '../../components/Title/Title'
export const About = () => {
    return(
        <div className="about">
             <img src={perfil} alt="" className='profilePic' />
                <Title text="Welcome to my portfolio website!"/> 
              <br />
             <Text text=" My name is Felipe Ribeiro and I am a passionate technology professional with experience in the field." />
            <Text text="I have always been fascinated by the power of technology and how it can be used to create innovative solutions and improve people's lives. Throughout my career, I have been dedicated to learning new technologies and expanding my skill set."/>
                <Text text="I have a strong background in web development, with expertise in languages such as HTML, CSS, JavaScript, and frameworks like React, Node, Bootstrap, and jQuery. I have experience in creating responsive and user-friendly websites, as well as developing robust and scalable web applications."/>
                <Text text="In addition to my technical skills, I am also a dedicated and hardworking individual who is committed to delivering high-quality results. I enjoy working in a team environment and am always willing to learn from others and collaborate to achieve a common goal. I have one and a half years of experience developing applications with HTML, CSS, JavaScript and some tools like WordPress."/>
                <Text text="If you are looking for a skilled and experienced technology professional, I would be happy to work with you. Feel free to explore my portfolio and contact me if you have any questions or would like to discuss a potential project. Thank you for visiting my website!"/>

        </div>
      
    )
}