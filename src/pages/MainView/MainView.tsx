import { Fragment, useEffect, useState } from 'react';
import { fetchCatList, fetchCat, addToFavorites } from '@/services/Cats/Cats';
import { Cat } from '@/types/Cat';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { Link } from 'react-router-dom';
import copyCatToClipboard from '@/utils/copyCatToClipboard';
import useQuery from '@/utils/fetchQuery';
import Spinner from '@/components/Spinner';

const catListParameters = {
  has_breeds: 1,
  limit: 10,
};

function MainView() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [favoritesMsg, setFavoritesMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const query = useQuery();
  const id = query.get('id');

  const handleFetch = async () => {
    setLoading(true);
    const res = await fetchCatList(catListParameters);
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

  const handleSelectCat = async (catId: string) => {
    const res = await fetchCat(catId);
    setSelectedCat(res.data);
  };
  const handleAddToFavorites = async (catId: string) => {
    setLoading(true);
    const res = await addToFavorites(catId);
    if (res?.data?.message === 'SUCCESS') {
      setFavoritesMsg(res?.data?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
    if (id) handleSelectCat(id);
  }, []);

  const handleLoadMore = () => {
    handleFetch();
  };

  const onModalClose = () => {
    setFavoritesMsg('');
    setSelectedCat(null);
  };

  return (
    <div className="">
      <Spinner isLoading={loading} />
      <ul className="grid grid-cols-5 gap-2-0">
        {cats?.map((cat, index) => (
          <li key={cat.id + index}>
            <div onClick={() => handleSelectCat(cat.id)} className="h-26-0 w-full overflow-hidden">
              <img src={cat.url} className="w-full h-full object-cover" />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-2-0">
        <Button onClick={handleLoadMore}>Load More</Button>
      </div>

      <Modal url="/" isOpen={selectedCat ? true : false} onClose={onModalClose}>
        <img src={selectedCat?.url} className="max-h-40-0" />

        {selectedCat?.breeds?.map((breed) => (
          <Fragment key={breed.id}>
            <div className="text-center">
              Breed:
              {/* Takes user to a breed page and show relevant breed cats */}
              <Link to={`/breeds?id=${breed.id}`}>
                <span className="font-700 text-primary"> {breed.name}</span>:
              </Link>
            </div>
            <div className="flex space-x-1-0 justify-center mt-1-0">
              <div>
                {/* Copies cat image link to clipboard */}
                <Button bg="secondary" onClick={() => copyCatToClipboard(`?id=${selectedCat.id}`)}>
                  Copy Link
                </Button>
              </div>
              <div>
                {/* Adds cat to favorites */}
                {favoritesMsg ? (
                  favoritesMsg
                ) : (
                  <Button onClick={() => handleAddToFavorites(selectedCat.id)}>Add to favorites ♡</Button>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </Modal>
    </div>
  );
}

export default MainView;
