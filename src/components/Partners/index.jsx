import { PartnersField } from './styled';
import LogoCegal from '../../assets/logo-cegal.png';
import LogoCognite from '../../assets/logo-cognite.png';
import LogoMoeller from '../../assets/logo-moeller.png';
import LogoRoedeKors from '../../assets/logo-roede-kors.png';

export default function Partners() {
  return (
    <PartnersField id="partners">
      <div className="partners">
        <div>
          <h2>Kunder og partnere</h2>
          <p>
            Vi i Dyktig samarbeider med flere aktører innen IT bransjen og våre
            kunder er både små og store bedrifter.
          </p>
        </div>
        <div className="logo-partners">
          <img src={LogoCegal} alt="" />
          <img src={LogoMoeller} alt="" />
          <img src={LogoRoedeKors} alt="" />
          <img src={LogoCognite} alt="" />
        </div>
      </div>
    </PartnersField>
  );
}
