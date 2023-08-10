import { DescriptionField, CardsField } from './styled';
import KimOedegaardImg from '../../assets/img-profile-kim.jpg';
import AlexanderAbrosimovImg from '../../assets/img-profile-alexander.png';
import FredrikHaugsandImg from '../../assets/img-profile-fredrik.jpg';
import JuliaChmurnaImg from '../../assets/img-profile-julia.jpg';

import Card from './Card';
import Career from './Career';

export default function Team() {
  const teamMembers = [
    {
      img: KimOedegaardImg,
      title: 'Kim Ødegaard',
      content: 'Seniorutvikler / Daglig leder',
      linkedinURL: 'https://www.linkedin.com/in/kim-silkeb%C3%A6kken-4a86261b/',
    },
    {
      img: AlexanderAbrosimovImg,
      title: 'Alexander Abrosimov',
      content: 'Seniorutvikler',
      linkedinURL:
        'https://www.linkedin.com/in/alexander-abrosimov-622179139/?originalSubdomain=no',
    },
    {
      img: FredrikHaugsandImg,
      title: 'Fredrik Haugsand',
      content: 'Seniorutvikler',
      linkedinURL: 'https://www.linkedin.com/in/fredrik-haugsand-4b9661112/',
    },
    {
      img: JuliaChmurnaImg,
      title: 'Julia Chmurna',
      content: 'Frontendutvikler / UX-designer',
      linkedinURL: 'https://www.linkedin.com/in/julia-chmurna-9947b131/',
    },
  ];

  return (
    <DescriptionField id="about-us">
      <div className="description-intro">
        <h2>Vårt team av dyktige konsulenter</h2>
        <p>
          Teamet av erfarne IT-konsulenter samarbeider tett med våre kunder for
          å identifisere muligheter for effektivisering, optimalisering av
          prosesser og implementering av ny teknologi.
        </p>
      </div>

      <CardsField>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            img={member.img}
            title={member.title}
            content={member.content}
            linkedinURL={member.linkedinURL}
          />
        ))}
      </CardsField>

      <Career />
    </DescriptionField>
  );
}
