import { SectionBanner } from './styled';
import IntroImage from '../../assets/developer-team.jpg';
import ArrowDown from '../../assets/arrow-down.svg';

export default function Banner() {
  return (
    <SectionBanner>
      <div className="description">
        <div className="mobile-description">
          <div className="top-banner">
            <div className="left-banner">
              <h1>
                <span>Skreddersydde</span> <span>IT-løsninger</span>
              </h1>
              <p>
                IT konsulentselskap med flinke folk som bryr seg om sine kunder
              </p>
              <a
                href="#description-section-id"
                className="button-link smooth-scroll-link"
              >
                <img src={ArrowDown} className="arrow-down" />
              </a>
            </div>

            <div className="right-banner">
              <img
                className="intro desktop"
                src={IntroImage}
                alt="Dyktig Team"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionBanner>
  );
}
