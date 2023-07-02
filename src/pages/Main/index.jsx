import { useState, useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Description from '../../components/Description';
import Team from '../../components/Team';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';
import MobileMenu from '../../components/MenuMobile';

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setIsScrolled(currentPosition > 100);
      if (isOpen && currentPosition > 100) {
        handleMobileMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, handleMobileMenu]);

  function handleMobileMenu() {
    setIsOpen(!isOpen);
    const body = document.body;
    if (!isOpen) {
      body.classList.add('mobile-menu-open');
      window.scrollTo(0, 0);
    } else {
      body.classList.remove('mobile-menu-open');
    }
  }
  return (
    <Container>
      <Header isOpen={isOpen} mobileMenu={handleMobileMenu} />
      {isOpen && <MobileMenu handleMobileMenu={handleMobileMenu} />}
      <Banner />
      <Description />
      <Team />
      <Partners />
      <Footer />
    </Container>
  );
}
