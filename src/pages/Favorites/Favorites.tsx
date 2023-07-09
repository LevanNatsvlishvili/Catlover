import { useEffect, useState } from 'react';
import { fetchCatFavoritesList, removeFromFavorites } from '@/services/Cats/Cats';
import { FavoriteCat } from '@/types/Cat';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

function Favorites() {
  const [cats, setCats] = useState<FavoriteCat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetch = async () => {
    setLoading(true);
    const res = await fetchCatFavoritesList();
    if (res?.data?.length) {
      if (!!cats.length) {
        setCats((p) => [...p, ...res.data]);
        setLoading(false);

        return;
      }

      setCats(res.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleRemoveFromFavorites = async (id: string) => {
    setLoading(true);
    const res = await removeFromFavorites(id);
    if (res.data.message === 'SUCCESS') {
      const newArr = cats.filter((cat) => cat.id !== id);
      setCats(newArr);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Spinner isLoading={loading} />
      <ul className="grid grid-cols-5 gap-2-0">
        {cats.map((cat, index) => (
          <li key={cat.id + index}>
            <div className="h-26-0 w-full overflow-hidden">
              <img src={cat?.image.url} className="w-full h-full object-cover" />
            </div>
            <div className="mt-1-0">
              <Button full onClick={() => handleRemoveFromFavorites(cat.id)}>
                Remove from favorites
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
