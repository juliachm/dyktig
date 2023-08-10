import { DescriptionField } from './styled';

export default function Description() {
  return (
    <DescriptionField id="description-section-id">
      <div>
        <h2>
          Individuelt tilpassede IT-løsninger til bedrifter i ulike bransjer
        </h2>
        <p className="description-intro">
          Vi er en IT-konsulentbedrift som spesialiserer oss på å levere
          målrettede løsninger som øker effektiviteten og styrker
          vekstpotensialet. Vår dedikerte ekspertise og lidenskap for teknologi
          gjør oss i stand til å forstå de unike behovene til hver enkelt
          bedrift vi samarbeider med.
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
