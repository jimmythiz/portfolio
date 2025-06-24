import { useContext } from 'react';
import { ThemeContext } from '../../context';

const TestimonialCards = ({ username, imageUrl, comments }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="testimonial-container">
            <div className={darkMode ? "testimonial-card" : "testimonial-card testimonial-card-dark"}>
                <div className={darkMode ? "user-image"  : "user-image user-image-dark"}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className="user-name">{username}</div>
                <div className="user-testimony">
                    <p>{comments}</p>
                </div>
            </div>
        </div>
  );
}

export default TestimonialCards;
