import styles from './Pagamento.module.css'
import { DollarSign } from 'lucide-react'

function Pagamento({ onNavigate }) {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1><DollarSign size={32} /> Pagamento</h1>
        <p>Realize o pagamento para finalizar a sua compra</p>
      </div>

      <div className={styles.card}>
        <div className={styles.left}>
          <h3>Detalhes:</h3>
          <div className={styles.item}>
            <img src="https://placehold.co/50x40" alt="lanche 1" />
            <span>Descrição ou legenda sobre o lanche 1...</span>
          </div>
          <div className={styles.item}>
            <img src="https://placehold.co/50x40" alt="lanche 2" />
            <span>Descrição ou legenda sobre o lanche 2...</span>
          </div>
          <div className={styles.item}>
            <img src="https://placehold.co/50x40" alt="lanche 3" />
            <span>Descrição ou legenda sobre o lanche 3...</span>
          </div>
          <p className={styles.qty}>Quantidade de itens: 3</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.right}>
          <p className={styles.total}>Valor total: <span>R$ XX,XX</span></p>

          <select className={styles.select}>
            <option>Forma de pagamento</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
            <option>Pix</option>
            <option>Dinheiro</option>
          </select>

          <div className={styles.opcoes}>
            <div className={styles.opcao}>
              <img src="https://placehold.co/48x32" alt="opcao 1" />
              <span>Opção 1...</span>
            </div>
            <div className={styles.opcao}>
              <img src="https://placehold.co/48x32" alt="opcao 2" />
              <span>Opção 2...</span>
            </div>
            <div className={styles.opcao}>
              <img src="https://placehold.co/48x32" alt="opcao 3" />
              <span>Opção 3...</span>
            </div>
          </div>

          <div className={styles.btns}>
            <button className={styles.btnPagar}>Pagar</button>
            <button className={styles.btnCancelar} onClick={() => onNavigate('home')}>Cancelar compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagamento