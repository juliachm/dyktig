import { Menu } from './styled';

export default function MobileMenu({ isOpen, handleMobileMenu }) {
  const menuBarHeight = 60;

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    handleMobileMenu();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - menuBarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Menu className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
      <ul id="home-section-id">
        <li>
          <a
            href="#description-section-id"
            onClick={(e) => scrollToSection(e, 'description-section-id')}
          >
            Om Dyktig
          </a>
        </li>
        <li>
          <a href="#about-us" onClick={(e) => scrollToSection(e, 'about-us')}>
            Vårt team
          </a>
        </li>
        <li>
          <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')}>
            Partnere
          </a>
        </li>
        <li className="contact-btn">
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            Kontakt
          </a>
        </li>
      </ul>
    </Menu>
  );
}
