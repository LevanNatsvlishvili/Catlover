import { Fragment, useEffect, useState } from 'react';
import { fetchCatList, fetchCat, addToFavorites } from '@/services/Cats/Cats';
import { Cat } from '@/types/Cat';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { useParams } from 'react-router-dom';
import copyCatToClipboard from '@/utils/copyCatToClipboard';

const catListParameters = {
  has_breeds: 1,
  limit: 10,
};

function MainView() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const { id } = useParams();

  const handleFetch = async () => {
    const res = await fetchCatList(catListParameters);
    if (!!cats.length) {
      setCats((p) => [...p, ...res.data]);
      return;
    }
    setCats(res.data);
  };

  const handleSelectCat = async (catId: string) => {
    const res = await fetchCat(catId);
    setSelectedCat(res.data);
  };
  const handleAddToFavorites = async (catId: string) => {
    const res = await addToFavorites(catId);
    console.log(res);
    // setSelectedCat(res.data);
  };

  useEffect(() => {
    handleFetch();
    if (id) handleSelectCat(id);
  }, []);

  const handleLoadMore = () => {
    handleFetch();
  };

  return (
    <div className="">
      <ul className="grid grid-cols-5 gap-2-0">
        {cats.map((cat, index) => (
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

      <Modal url="/" isOpen={selectedCat ? true : false} onClose={() => setSelectedCat(null)}>
        <img src={selectedCat?.url} className="max-h-40-0" />

        <ul>
          {selectedCat?.breeds?.map((breed) => (
            <Fragment key={breed.id}>
              <li>
                <span className="font-700 text-primary">Breed</span>:{breed.name}
              </li>
              <li>
                <a onClick={() => copyCatToClipboard(selectedCat.id)} className="text-primary cursor-pointer">
                  Copy Link
                </a>
              </li>
              <li onClick={() => handleAddToFavorites(selectedCat.id)} className="cursor-pointer">
                Add to favorites ♡
              </li>
            </Fragment>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

export default MainView;
