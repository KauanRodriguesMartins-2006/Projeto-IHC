import styles from './Home.module.css'
import { ShoppingCart } from 'lucide-react'

function CartItem({ name, description, price, image, qty, onUpdateQty }) {
    return (
        <div className={styles.card}>
            <img src={image || 'https://placehold.co/120x90'} alt={name} className={styles.cardImg} />
            <div style={{ flex: 1 }}>
                <p className={styles.cardName}>{name}</p>
                <p className={styles.cardDesc}>{description}</p>
                <div className={styles.cardBottom}>
                    <span className={styles.cardPrice}>
                        Valor: <span style={{ color: '#16a34a' }}>R$ {price.toFixed(2).replace('.', ',')}</span>
                    </span>
                    <div className={styles.cardActions}>
                        <button className={styles.qtyBtn} onClick={() => onUpdateQty(qty - 1)}>−</button>
                        <span>{qty}</span>
                        <button className={styles.qtyBtn} onClick={() => onUpdateQty(qty + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Home({ produtos, cart, onUpdateQty, onClear, total, onNavigate }) {
    const totalQty = Object.values(cart).reduce((s, q) => s + q, 0);

    return (
        <>
            <section className={styles.contain}>
                <span className={styles.span}>
                    <ShoppingCart size={50} />
                    <h1>Carrinho</h1>
                </span>
                <h5 className={styles.text}>
                    Selecione os itens desejados, corrija o pedido (se necessário) e finalize a sua compra.
                </h5>
                <div className={styles.price}>
                    <span className={styles.span}>
                        <h3>Valor total: R$ {total.toFixed(2).replace('.', ',')}</h3>
                        {totalQty > 0 && <small style={{ color: '#6b7280' }}>{totalQty} {totalQty === 1 ? 'item' : 'itens'}</small>}
                    </span>
                    <div>
                        <button
                            className={`${styles.btn} ${styles.btnColor1}`}
                            onClick={() => onNavigate('pagamento')}
                            disabled={totalQty === 0}
                        >
                            Finalizar compra
                        </button>
                        <button
                            className={`${styles.btn} ${styles.btnColor2}`}
                            onClick={onClear}
                        >
                            Limpar carrinho
                        </button>
                    </div>
                </div>

                <div className={styles.cartItem}>
                    {produtos.map(produto => (
                        <CartItem
                            key={produto.id}
                            {...produto}
                            qty={cart[produto.id] || 0}
                            onUpdateQty={(qty) => onUpdateQty(produto.id, qty)}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home
