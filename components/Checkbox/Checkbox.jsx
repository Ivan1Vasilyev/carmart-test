import styles from './Checkbox.module.scss';
import { useState } from 'react';

const Checkbox = ({ name, setter }) => {
  const [checked, setChecked] = useState(false);
  const toggler = e => {
    setter({ name: e.target.name, selected: e.target.checked });
    setChecked(e.target.checked);
  };

  return (
    <li className={styles.container}>
      <label className={styles.item}>
        <input className={styles.checkbox} type="checkbox" name={name} checked={checked} onChange={toggler} />
        <span className={styles.name}>{name}</span>
      </label>
    </li>
  );
};

export default Checkbox;
