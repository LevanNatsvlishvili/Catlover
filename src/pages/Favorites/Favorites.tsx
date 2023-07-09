import { useEffect, useState } from 'react';
import { fetchCatFavoritesList } from '@/services/Cats/Cats';
import { FavoriteCat } from '@/types/Cat';
import Button from '@/components/Button';

const catListParameters = {
  has_breeds: 1,
  limit: 10,
};

function Favorites() {
  const [cats, setCats] = useState<FavoriteCat[]>([]);

  const handleFetch = async () => {
    const res = await fetchCatFavoritesList(catListParameters);
    if (!!cats.length) {
      setCats((p) => [...p, ...res.data]);
      return;
    }
    setCats(res.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleLoadMore = () => {
    handleFetch();
  };

  return (
    <div className="">
      <ul className="grid grid-cols-5 gap-2-0">
        {cats.map((cat, index) => (
          <li key={cat.id + index}>
            <div className="h-26-0 w-full overflow-hidden">
              <img src={cat?.image.url} className="w-full h-full object-cover" />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-2-0">
        <Button onClick={handleLoadMore}>Load More</Button>
      </div>
    </div>
  );
}

export default Favorites;
