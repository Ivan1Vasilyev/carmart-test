import styles from './Menu.module.scss';
import Checkbox from '../Checkbox';
import { useState } from 'react';

const Menu = ({ title, brands, setter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggler = e => setIsOpen(e.target.checked);

  return (
    <div className={styles.container}>
      <label className={styles['title-wrapper']}>
        <input className={styles.accordion} type="checkbox" checked={isOpen} onChange={menuToggler} />
        <span className={styles.title}>{title}</span>
      </label>
      <div className={`${styles['list-wrapper']} ${isOpen ? styles.open : ''}`}>
        <p className={styles.caption}>Купить под заказ</p>
        <menu className={styles.list}>
          {brands.map(brand => (
            <Checkbox name={brand} key={brand} setter={setter} />
          ))}
        </menu>
      </div>
    </div>
  );
};

export default Menu;
