import { CardContainer } from './styled';
import IconLinkedIn from '../../../assets/icon-linkedin-line.svg';

export default function Card({ img, title, content }) {
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
            <a href="">
              <img src={IconLinkedIn} alt="Icon Image" className="icon-card" />
            </a>
          </div>
        </article>
      </div>
    </CardContainer>
  );
}
