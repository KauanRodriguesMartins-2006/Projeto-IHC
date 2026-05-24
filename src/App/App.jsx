import { useState } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className={styles.container}>
      <Aside onNavigate={setCurrentPage} isOpen={isOpen} />

      <div className={styles.content}>
        <Header onToggle={() => setIsOpen(prev => !prev)} />
        {/* {currentPage === 'home' && <Home onNavigate={setCurrentPage} />} */}
      </div>
    </div>
  );
}

export default App;