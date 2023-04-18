import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Menu from '../components/Menu';
import { cutFirstPageData, isObjectEmpty, removeProp, filterActualData } from '../utils/helpers';
import { getAllCars } from '../utils/api';
import { BRANDS, MENU_TITLE_BRAND } from '../utils/constants';
import { useBrand } from '../utils/hooks';

const Index = ({ cars }) => {
  const [selectedBrands, setSelectedBrands] = useState({});
  const [currentBrand, setCurrentBrand] = useState({ name: '', selected: false });
  const [filteredCars, setFilteredCars] = useState([]);
  const { data, error } = useBrand(currentBrand.name, currentBrand.selected);

  useEffect(() => {
    if (data) {
      setSelectedBrands(state => ({ ...state, [currentBrand.name]: filterActualData(data.list) }));
    } else {
      setSelectedBrands(state => removeProp(state, currentBrand.name));
    }
  }, [data, currentBrand.name]);

  useEffect(() => {
    setFilteredCars(isObjectEmpty(selectedBrands) ? cars : cutFirstPageData(Object.values(selectedBrands)));
  }, [selectedBrands]);

  return (
    <div className="container-xl">
      <header className="grid">
        <div className="g-col header">
          <Menu brands={BRANDS} title={MENU_TITLE_BRAND} setter={setCurrentBrand} />
        </div>
      </header>
      <main className="grid card-container">
        {error ? (
          <h1 className="g-col-24">Что-то пошло не так...</h1>
        ) : filteredCars.length ? (
          filteredCars.map(car => (
            <div className="g-col-24 g-col-lg-12 g-col-xxl-8" key={car._id}>
              <Card car={car} />
            </div>
          ))
        ) : (
          <h1 className="g-col-24">Ничего не найдено</h1>
        )}
      </main>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const allCars = await getAllCars(BRANDS);
    const cars = cutFirstPageData(allCars.map(cars => filterActualData(cars.list)));

    return { props: { cars } };
  } catch (err) {
    console.log(err);
  }
}
