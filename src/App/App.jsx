import { useState } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Pagamento from '../Pagamento/Pagamento';
import Home from '../Home/Home';

const PRODUTOS = [
  {
    id: 1,
    name: 'Enroladinho de salsicha',
    description: 'Delicioso enroladinho assado com salsicha e massa crocante.',
    price: 7.00,
    image: 'https://placehold.co/120x90',
  },
  {
    id: 2,
    name: 'Pão pizza',
    description: 'Pão com molho de tomate, mussarela e orégano.',
    price: 7.00,
    image: 'https://placehold.co/120x90',
  },
  {
    id: 3,
    name: 'Coxinha',
    description: 'Coxinha de frango com catupiry, crocante por fora.',
    price: 6.00,
    image: 'https://placehold.co/120x90',
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // { [id]: qty }
  const [cart, setCart] = useState({});

  function updateQty(id, qty) {
    setCart(prev => ({ ...prev, [id]: Math.max(0, qty) }));
  }

  function clearCart() {
    setCart({});
  }

  const cartItems = PRODUTOS.map(p => ({ ...p, qty: cart[p.id] || 0 })).filter(p => p.qty > 0);
  const total = cartItems.reduce((sum, p) => sum + p.price * p.qty, 0);
  const totalQty = cartItems.reduce((sum, p) => sum + p.qty, 0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {currentPage === 'home' && (
          <Home
            produtos={PRODUTOS}
            cart={cart}
            onUpdateQty={updateQty}
            onClear={clearCart}
            total={total}
            onNavigate={setCurrentPage}
          />
        )}
        {currentPage === 'pagamento' && (
          <Pagamento
            cartItems={cartItems}
            total={total}
            totalQty={totalQty}
            onNavigate={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
