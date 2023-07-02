import { FooterField } from './styled';
import Logo from '../../assets/logo-dyktig-long.png';
import IconFacebook from '../../assets/icon-facebook-line.svg';
import IconSlack from '../../assets/icon-slack.svg';

export default function Footer() {
  return (
    <FooterField id="contact">
      <div className="footer-top">
        <img className="logo-footer" src={Logo} alt="Logo" />

        {/* Social media */}
        <div className="social-media">
          <a href="">
            <img src={IconFacebook} alt="" />
          </a>
          <a href="">
            <img src={IconSlack} alt="" />
          </a>
        </div>
      </div>

      <hr />

      <div className="our-company">
        <p>
          Vi er dedikerte til å levere skreddersydde IT-løsninger som hjelper
          virksomheten din med å trives i det digitale landskapet.
        </p>

        <a className="footer-link" href="mailto:j.chmurna@gmail.com">
          alexander@dyktig.as
        </a>
      </div>

      <div className="footer-bottom">
        <span>DYKTIG AS @ 2023</span>
      </div>
    </FooterField>
  );
}
