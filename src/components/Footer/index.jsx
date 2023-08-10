import { FooterField } from './styled';
import Logo from '../../assets/logo-dyktig-light-font.png';
import IconFacebook from '../../assets/icon-facebook-line.svg';
import IconSlack from '../../assets/icon-slack.svg';

export default function Footer() {
  return (
    <FooterField id="contact">
      <div className="footer-top">
        <img className="logo-footer" src={Logo} alt="Logo Dyktig AS" />

        {/* Social media */}
        <div className="social-media">
          <a
            href="https://www.facebook.com/DyktigAS/?locale=nb_NO"
            target="_blank"
          >
            <img src={IconFacebook} alt="facebook icon" />
          </a>

          <a href="/">
            <img src={IconSlack} alt="" />
          </a>
        </div>
      </div>

      <hr />

      <div className="our-company">
        <p className="description">
          Vi er dedikerte til å levere skreddersydde IT-løsninger som hjelper
          virksomheten din med å trives i det digitale landskapet.
        </p>
        <p className="email-contact">alexander@dyktig.no</p>

        {/* <a className="footer-link" href="mailto:alexander@dyktig.no">
          alexander@dyktig.no
        </a> */}
        {/* <a className="link" href="mailto:alexander@dyktig.no">
          alexander@dyktig.no <span className="arrow">&#8599;</span>
        </a> */}
      </div>

      <div className="footer-bottom">
        <span>DYKTIG AS @ 2023</span>
      </div>
    </FooterField>
  );
}
