import { useParams } from 'react-router-dom';

import styles from './style.module.css';

export const ItemPage = () => {
  const itemName = useParams().item;

  return <div className={styles.main}>This is page for {itemName}</div>;
};
