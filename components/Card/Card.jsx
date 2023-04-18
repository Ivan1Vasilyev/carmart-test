import styles from './Card.module.scss';
import { Roboto_Condensed } from 'next/font/google';
import Slider from '../Slider';
import { calcWordEnding, insertSpaces, getFirstOption } from '../../utils/helpers';

const robotoCondensed = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Card = ({ car }) => {
  const {
    brandName,
    modelName,
    price,
    options,
    equipmentName,
    transmission,
    engineCapacity,
    enginePower,
    fuelType,
    transmissionType,
    colorByClassifierName,
    modelYear,
    vin,
    photos,
  } = car;

  return (
    <div
      className={`${styles.container} grid ${options.length ? '' : styles['small-container']}`}
      style={{ '--bs-gap': '0.9rem', '--bs-rows': 7, '--bs-columns': 1 }}
    >
      <div className="grid" style={{ '--bs-gap': 0, '--bs-rows': 1 }}>
        <div className="g-col-24">
          <div className={`${styles['one-line']} ${robotoCondensed.className}`}>
            <h2 className={styles.model}>
              {`${brandName} ${modelName} ${equipmentName} ${engineCapacity}`}&nbsp;&nbsp;
              {`${transmission}`}&nbsp;&nbsp;
            </h2>
            <p>
              <sup className={styles.year}>{modelYear}</sup>
            </p>
          </div>
          <p className={styles.vin}>{vin}</p>
        </div>
      </div>
      {photos.length ? (
        <Slider photos={photos} />
      ) : (
        <div className={`${styles['no-photo']} grid`} style={{ '--bs-gap': 0, '--bs-rows': 1 }}>
          <p className={`${styles['no-photo-line']} g-col`}>Фото отсутствует</p>
        </div>
      )}

      {options.length ? (
        <>
          <div className="grid" style={{ '--bs-gap': 0, '--bs-rows': 1, '--bs-columns': 2 }}>
            <div className="g-col-1">
              <h3 className={styles.parameter}>Двигатель</h3>
              <p className={styles.description}>
                {engineCapacity} л <span className={styles['colored-text']}>/</span> {enginePower} лс{' '}
                <span className={styles['colored-text']}>/</span> {fuelType}
              </p>
            </div>
            <div className="g-col-1">
              <h3 className={styles.parameter}>КПП</h3>
              <p className={styles.description}>{transmissionType}</p>
            </div>
          </div>
          <div className="grid" style={{ '--bs-gap': 0, '--bs-rows': 1, '--bs-columns': 2 }}>
            <div className="g-col-1">
              <h3 className={styles.parameter}>Пробег</h3>
              <p className={styles.description}>{insertSpaces(160500)} км</p>
            </div>
            <div className="g-col-1">
              <h3 className={styles.parameter}>Цвет</h3>
              <p className={styles.description}>{colorByClassifierName || 'не указан'}</p>
            </div>
          </div>
          <div className="grid" style={{ '--bs-gap': 0, '--bs-rows': 1 }}>
            <div className="g-col-24">
              <h3 className={styles.parameter}>пакеты</h3>
              <div className={styles['one-line']}>
                <p className={`${styles.options}`}>{getFirstOption(options)}&nbsp;</p>
                {options.length - 1 === 0 ? null : (
                  <p className={styles.packages}>
                    (+ ещё {options.length - 1} пакет{calcWordEnding(options.length - 1)})
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="grid pt-3" style={{ '--bs-gap': 0, '--bs-rows': 1, '--bs-columns': 2 }}>
            <div className="g-col-1">
              <p className={styles.price}>
                <span className={styles['colored-text']}>{insertSpaces(price)}</span> ₽
              </p>
              <p className={styles.description}>
                Доп. опции на <span className={styles['colored-text']}>{insertSpaces(999999)}</span> ₽
              </p>
            </div>
            <div className={`${styles['align-right']} g-col-1`}>
              <button className={styles.button}>купить</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid pt-2" style={{ '--bs-gap': 0, '--bs-rows': 1, '--bs-columns': 2 }}>
            <div className="g-col-1">
              <h3 className={styles.parameter}>Двигатель</h3>
              <p className={styles.description}>
                {engineCapacity} л <span className={styles['colored-text']}>/</span> {enginePower} лс{' '}
                <span className={styles['colored-text']}>/</span> {fuelType}
              </p>
            </div>
            <div className="g-col-1">
              <p className={`${styles.price} ${styles['price-in-right']} ${styles['align-right']}`}>
                <span className={styles['colored-text']}>{insertSpaces(price)}</span> ₽
              </p>
            </div>
          </div>
          <div className="grid" style={{ '--bs-gap': 0, '--bs-rows': 1, '--bs-columns': 2 }}>
            <div className="g-col-1">
              <h3 className={styles.parameter}>КПП</h3>
              <p className={styles.description}>{transmissionType}</p>
            </div>
          </div>

          <div className="grid pt-1" style={{ '--bs-gap': 0, '--bs-rows': 1, '--bs-columns': 2 }}>
            <div className="g-col-1">
              <h3 className={styles.parameter}>Пробег</h3>
              <p className={styles.description}>{insertSpaces(160500)} км</p>
            </div>
            <div className={`${styles['align-right']} g-col-1`}>
              <button className={styles['big-button']}>купить</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
