import { Fragment, useCallback, useEffect, useState } from 'react';
import { fetchCatList, fetchCat, fetchCatBreedList } from '@/services/Cats';
import { Cat } from '@/types/Cat';
import Button from '@/components/Button';
import { Link, useParams } from 'react-router-dom';
import Modal from '@/components/Modal';
import { fetchBreed } from '@/services/Cats/Cats';
import { paths } from '@/routing/Paths';

const catListParameters = {
  has_breeds: 1,
  limit: 10,
};

function Breeds() {
  const [breeds, setBreeds] = useState<Cat[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<Cat[] | null>(null);

  const handleFetch = async () => {
    const res = await fetchCatBreedList(catListParameters);
    setBreeds(res.data);
  };

  const handleSelectBreed = useCallback(async (catId: string) => {
    const res = await fetchBreed(catId);
    setSelectedBreed(res.data);
  }, []);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="text-2-5 mt-2-4 p-6-0">
      <ul className="grid grid-cols-3 gap-x-1-6">
        {breeds.map((breed, index) => (
          <li key={breed.id + index}>
            <span onClick={() => handleSelectBreed(breed.id)} className="cursor-pointer hover:text-primary">
              {breed.name}
            </span>
          </li>
        ))}
      </ul>

      <Modal isOpen={selectedBreed ? true : false} onClose={() => setSelectedBreed(null)}>
        <p>{!!selectedBreed?.length && selectedBreed[0]['name']}</p>
        <ul className="grid grid-cols-4 gap-1-0">
          {selectedBreed?.map((breed: Cat) => (
            <Fragment key={breed.id}>
              <li>
                <Link to={paths.main + breed.id}>
                  <img src={breed.url} className="max-h-15-0 object-cover w-full" />
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

export default Breeds;
