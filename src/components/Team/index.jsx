import { DescriptionField, CardsField } from './styled';
import AlexanderAbrosimovImg from '../../assets/img-profile.png';

import Card from './Card';
import Career from './Career';

export default function Team() {
  const teamMembers = [
    {
      img: AlexanderAbrosimovImg,
      title: 'Alexander Abrosimov',
      content: 'Founder & CEO',
    },
    {
      img: AlexanderAbrosimovImg,
      title: 'Name Name 2',
      content: 'Description 2',
    },
    {
      img: AlexanderAbrosimovImg,
      title: 'Name Name 3',
      content: 'Description 5',
    },
    {
      img: AlexanderAbrosimovImg,
      title: 'Name Name Name 4',
      content: 'Description 5',
    },
  ];

  return (
    <DescriptionField id="about-us">
      <div className="description-intro">
        <h2>Vårt team av dyktige konsulenter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          soluta obcaecati suscipit laboriosam cumque laudantium delectus!
          Sapiente distinctio, eveniet, rem voluptatum totam nesciunt optio
          dolor dolorem molestiae, in labore minima.
        </p>
      </div>

      <CardsField>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            img={member.img}
            title={member.title}
            content={member.content}
          />
        ))}
      </CardsField>

      <Career />
    </DescriptionField>
  );
}
