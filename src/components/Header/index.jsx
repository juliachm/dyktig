import { Nav } from './styled';
import Logo from '../../assets/logo-dyktig-short.png';
import MobileToggle from '../../assets/icon-hamburger.svg';
import CloseIcon from '../../assets/icon-close.svg';

export default function Header({ isOpen, mobileMenu }) {
  return (
    <Nav>
      <a href="#home-section-id" className="smooth-scroll-link">
        <img src={Logo} alt="Logo" />
      </a>

      <ul className="hidden" id="home-section-id">
        <li>
          <a href="#description-section-id" className="smooth-scroll-link">
            Om Dyktig
          </a>
        </li>
        <li>
          <a href="#about-us" className="smooth-scroll-link">
            Vårt team
          </a>
        </li>
        <li>
          <a href="#partners" className="smooth-scroll-link">
            Partnere
          </a>
        </li>
        <li className="contact-btn">
          <a href="#contact" className="smooth-scroll-link">
            Kontakt
          </a>
        </li>
      </ul>

      <button onClick={mobileMenu} className="mobile-toggle">
        <img src={isOpen ? CloseIcon : MobileToggle} className="menu-toggle" />
      </button>
    </Nav>
  );
}
