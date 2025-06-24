import { useContext } from 'react';
import { ThemeContext } from '../../context'; 
import { FaPaperPlane } from 'react-icons/fa';

const Portfoliocards = ({ title, imageUrl, description, link }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className='portfolio-carousel'>
      <div className='portfolio-image'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='portfolio-text'>
        <h3 className={darkMode ? 'site-title' : 'site-title dark-text'}>{title}</h3>
        <p className={darkMode ? 'site-description' : 'site-description dark-text'}>{description}</p>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <button className='visit-btn' style={{textAlign:"center"}}>
            Visit <FaPaperPlane />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Portfoliocards;
