import { Nav } from './styled';
import Logo from '../../assets/logo-dyktig-short.png';
import MobileToggle from '../../assets/icon-hamburger.svg';
import CloseIcon from '../../assets/icon-close.svg';

export default function Header({ isOpen, mobileMenu }) {
  return (
    <Nav>
      <a href="#home-section-id">
        <img src={Logo} alt="Logo" />
      </a>

      <ul className="hidden" id="home-section-id">
        <li>
          <a href="#description-section-id">Om Dyktig</a>
        </li>
        <li>
          <a href="#about-us">Vårt team</a>
        </li>
        <li>
          <a href="#partners">Partnere</a>
        </li>
        <li className="contact-btn">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>

      <button onClick={mobileMenu} className="mobile-toggle">
        <img src={isOpen ? CloseIcon : MobileToggle} className="menu-toggle" />
      </button>
    </Nav>
  );
}
