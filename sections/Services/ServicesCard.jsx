import { useContext } from 'react';
import { ThemeContext } from '../../context'; // adjust path as needed

const ServicesCard = ({ logo, header, description }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "yolooo" : "yolooo yolooo-dark"}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",marginBottom:"3rem" }}>
        <div>{logo}</div>
        <h3>{header}</h3>
      </div>
      <p style={{ textAlign: "center" }}>{description}</p>
    </div>
  );
};

export default ServicesCard;
