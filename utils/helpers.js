import { NUMBER_OF_CARDS_IN_PAGE } from './constants';

const calcEngineCapacity = capacity => (capacity / 1000).toFixed(1);

export const filterActualData = data => {
  return data.map((car, index) => ({
    _id: car._id,
    brandName: car.feedData.brandName,
    modelName: car.feedData.modelName,
    price: car.feedData.price,
    options: car.feedData.options,
    equipmentName:
      car.feedData.equipmentName === 'ПустаяКомплектация' ? 'Пустая Комплектация' : car.feedData.equipmentName,
    transmission: car.feedData.equipmentVariantTransmission,
    engineCapacity: calcEngineCapacity(car.feedData.equipmentVariantEngineCapacity),
    enginePower: car.feedData.equipmentVariantEnginePower,
    fuelType: car.feedData.equipmentVariantFuelType,
    transmissionType: car.feedData.equipmentVariantTransmissionType,
    colorByClassifierName: car.feedData.colorByClassifierName,
    modelYear: car.feedData.modelYear,
    vin: car.feedData.vin,
    photos: car.photobank.imgs.map(image => ({
      url: image.url,
      _id: image._id || index,
    })),
  }));
};

export const calcWordEnding = num => {
  const lastNum = Number(String(num).at(-1));
  return num > 5 && num < 20 ? 'ов' : lastNum === 1 ? '' : lastNum > 1 && lastNum < 5 ? 'а' : 'ов';
};

export const insertSpaces = price => {
  if (price < 1000) return String(price);

  const chars = [...String(price)];
  let result = '';

  for (let i = 0; i < chars.length; i++) {
    const index = chars.length - i - 1;

    if (i % 3 === 0) {
      result = ' ' + result;
    }

    result = chars[index] + result;
  }

  return result;
};

export const getFirstOption = options => (options.length ? options[0].name : null);

export const cutFirstPageData = allCars => {
  const result = [];

  for (let i = 0; i < NUMBER_OF_CARDS_IN_PAGE; i++) {
    allCars.forEach(cars => {
      if (cars[i] && result.length < NUMBER_OF_CARDS_IN_PAGE) {
        result.push(cars[i]);
      }
    });

    if (result.length >= NUMBER_OF_CARDS_IN_PAGE) return result;
  }

  return result;
};

export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const removeProp = (state, key) =>
  Object.keys(state)
    .filter(prop => prop !== key)
    .reduce((initObj, objKey) => {
      initObj[objKey] = state[objKey];
      return initObj;
    }, {});
