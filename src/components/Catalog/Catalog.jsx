import { useEffect, useState } from 'react';
import axios from 'axios';
import AdvertCard from '../AdvertCard/AdvertCard';

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAdverts = async () => {
      const response = await axios.get(
        `https://mockapi.io/api/v1/adverts?page=${page}&limit=4`
      );
      setAdverts(prev => [...prev, ...response.data]);
    };
    fetchAdverts();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Catalog</h1>
      <div className="catalog">
        {adverts.map(advert => (
          <AdvertCard key={advert.id} advert={advert} />
        ))}
      </div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default Catalog;
