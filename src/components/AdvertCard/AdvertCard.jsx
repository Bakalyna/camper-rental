import { useState } from 'react';

const AdvertCard = ({ advert }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Логіка для збереження в localStorage або Redux
  };

  return (
    <div className="advert-card">
      <img src={advert.gallery[0]} alt={advert.name} />
      <h2>{advert.name}</h2>
      <p>{advert.price.toFixed(2)} USD</p>
      <button onClick={toggleFavorite}>{isFavorite ? '❤️' : '♡'}</button>
      <button>Show more</button>
    </div>
  );
};

export default AdvertCard;
