import { CareerField } from './styled';

export default function Career() {
  return (
    <CareerField>
      <h3>Vil du bli en del av teamet?</h3>
      <p>
        Vi er stadig på jakt etter de riktige menneskene som vil trives i et
        hyggelig miljø.
      </p>
      <div className="description-bottom">
        <a className="link" href="mailto:alexander@dyktig.no">
          Kontakt oss <span className="arrow">&#8599;</span>
        </a>
      </div>
    </CareerField>
  );
}
