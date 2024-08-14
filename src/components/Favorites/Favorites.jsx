import AdvertCard from 'components/AdvertCard/AdvertCard';

// Імпортуйте необхідні залежності з Redux або localStorage

const Favorites = () => {
  const favorites = []; // Отримайте улюблені оголошення з Redux або localStorage

  return (
    <div>
      <h1>Your Favorite Campers</h1>
      {favorites.length === 0 ? (
        <p>No favorite campers yet.</p>
      ) : (
        favorites.map(advert => <AdvertCard key={advert.id} advert={advert} />)
      )}
    </div>
  );
};

export default Favorites;
