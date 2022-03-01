import './Footer.css';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function Footer() {
  return (
    <div className="footer">
      <section>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/amanda.jean.7758" className="socialMedia">
          <img alt="facebook" src={facebook}/></a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/amandajean007/" className="socialMedia">
          <img alt="instagram" src={instagram}/></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amanda-mcbee-98a586108/" className="socialMedia">
          <img alt="linkedin" src={linkedin}/></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/amandajean007/" className="socialMedia">
          <img alt="github" src={github}/></a><br />
            Chase your stars fool, life is short ✨ 
        </section>
    </div>
  );
}