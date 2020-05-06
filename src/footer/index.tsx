import React from 'react';
import styles from './index.module.scss';

const Footer = React.memo(() => {
  const github = 'https://github.com/NathanHan1';

  return (
    <div className={styles.footer}>
      designed by <span className={styles.designer}>{github}</span>
    </div>
  );
});

export default Footer;

