import { useState } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Pagamento from '../Pagamento/Pagamento'

import Home from '../Home/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <Header onToggle={() => setIsOpen(prev => !prev)} />
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'pagamento' && <Pagamento onNavigate={setCurrentPage} />}
      </div>
    </div>
    </>
  );
}

export default App;