import { DescriptionField } from './styled';

export default function Description() {
  return (
    <DescriptionField id="description-section-id">
      <div>
        <h2>Skreddersydde IT-løsninger til bedrifter i ulike bransjer</h2>
        <p className="description-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          soluta obcaecati suscipit laboriosam cumque laudantium delectus!
          Sapiente distinctio, eveniet, rem voluptatum totam nesciunt optio
          dolor dolorem molestiae, in labore minima.
        </p>
      </div>

      <div className="description-bottom">
        <span>Utvikling</span>
        <span>Design</span>
        <span>Sikkerhet</span>
      </div>
    </DescriptionField>
  );
}
