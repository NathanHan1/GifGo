import React from 'react';
import styles from './index.module.scss';

const Header = React.memo(() => {
  return (
    <h1 className={styles.header}>
      <span className={styles.title}>GifGo</span>
    </h1>
  );
});

export default Header;
