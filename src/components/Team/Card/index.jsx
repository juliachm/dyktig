import { CardContainer } from './styled';
import IconLinkedIn from '../../../assets/icon-linkedin.svg';

export default function Card({ img, title, content, linkedinURL }) {
  return (
    <CardContainer>
      <div className="card">
        <article>
          <div className="team-img-wrapper">
            <img src={img} className="profile-img" />
          </div>

          <div className="team-card-content">
            <p className="text name">{title}</p>
            <p className="text position">{content}</p>
            <a className="icon-card" href={linkedinURL} target="_blank">
              <img
                src={IconLinkedIn}
                alt="LinkedIn Icon"
                className="icon-card"
              />
            </a>
          </div>
        </article>
      </div>
    </CardContainer>
  );
}
