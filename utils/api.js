import { CARS_URL, HEADERS } from './constants';

const responseHandler = response => (response.ok ? response.json() : Promise.reject(response.json()));

export const getChosedBrand = async brand => {
  const response = await fetch(`${CARS_URL}${brand}`, {
    method: 'GET',
    headers: HEADERS,
  });

  return responseHandler(response);
};

export const getAllCars = async brands => Promise.all(brands.map(getChosedBrand));
