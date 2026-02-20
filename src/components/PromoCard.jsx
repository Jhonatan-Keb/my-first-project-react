import Button from './Button';

const PromoCard = ({ title, description, image, buttonText, onClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <Button text={buttonText} onClick={onClick} />
      </div>
    </div>
  );
};

export default PromoCard;