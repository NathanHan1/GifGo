import React from 'react';
import styles from './App.module.scss';
import Header from './header';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
