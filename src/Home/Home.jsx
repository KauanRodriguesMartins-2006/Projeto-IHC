import styles from './Home.module.css'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

function CartItem({ name, description, price, image }) {
    const [qty, setQty] = useState(0)

    return (
        <div className={styles.card}>
            <img src={image || 'https://placehold.co/120x90'} alt={name} className={styles.cardImg} />
            <div style={{ flex: 1 }}>
                <p className={styles.cardName}>{name}</p>
                <p className={styles.cardDesc}>{description}</p>
                <div className={styles.cardBottom}>
                    <span className={styles.cardPrice}>Valor: <span style={{ color: '#16a34a' }}>R$ {price}</span></span>
                    <div className={styles.cardActions}>
                        <button className={styles.qtyBtn} onClick={() => setQty(q => Math.max(0, q - 1))}>−</button>
                        <span>{qty}</span>
                        <button className={styles.qtyBtn} onClick={() => setQty(q => q + 1)}>+</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

function Home({ onNavigate }) {
    return (<>

        {/* === Ofertas Diarias === */}
        <section className={styles.container}>
            <span className={styles.span}>
                <ShoppingCart size={50} />
                <h1>Carrinho</h1>
            </span>
            <h5 className={styles.text}>Selecione os itens desejados, corrija o pedido (se necessário) e finalize a sua compra.</h5>
            <div className={styles.price}>
                <span className={styles.span}>
                    <h3>Valor total: R$xx.xx</h3>
                </span>
                <div>
                    <button className={`${styles.btn} ${styles.btnColor1}`} onClick={() => onNavigate('pagamento')}>Finalizar compra</button>
                    <button className={`${styles.btn} ${styles.btnColor2}`}>Limpar carrinho</button>
                </div>
            </div>

            <div className={styles.cartItem}>
                <CartItem
                    name="Enroladinho de salsicha"
                    description="Descrição ou legenda sobre o lanche..."
                    price="7,00"
                    image="https://placehold.co/120x90"
                />
                <CartItem
                    name="Pão pizza"
                    description="Descrição ou legenda sobre o lanche..."
                    price="7,00"
                    image="https://placehold.co/120x90"
                />  
            </div>


        </section>
    </>);
}

export default Home