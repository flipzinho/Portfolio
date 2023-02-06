import './Home.css'
import { useState, useEffect } from 'react';

export const Home = () => {
  const [myNameText, setMyNameText] = useState('');
  const [descriptionVisible, setDescriptionVisible] = useState(false); 
    
  useEffect(() => {
    let index = 0;
   
    const name = "Hi! I'm Felipe Ribeiro and I'm a web developer."; 
    const typing = setInterval(() => {
      setMyNameText(name.slice(0, index));
      index++;
      if (index === name.length + 1) {
        clearInterval(typing);
        setTimeout(() => {
          setDescriptionVisible(true);
        }, 1000);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className='mySection'>
      <div className='aboutMe'>
        <p className='myName'>{myNameText}</p>
        {descriptionVisible && (
          <p className='description'>
            In this website you can see my experiences and also my portfolio.
          </p>
        )}
      </div>
    </div>
  );
}







