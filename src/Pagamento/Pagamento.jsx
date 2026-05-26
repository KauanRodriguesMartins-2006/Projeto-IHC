import styles from './Pagamento.module.css'
import { DollarSign } from 'lucide-react'
import { useState } from 'react'

function Pagamento({ cartItems, total, totalQty, onNavigate }) {
  const [formaPagamento, setFormaPagamento] = useState('')
  const [pago, setPago] = useState(false)

  function handlePagar() {
    if (!formaPagamento) {
      alert('Selecione uma forma de pagamento.')
      return
    }
    setPago(true)
  }

  if (pago) {
    return (
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>✅ Pedido confirmado!</h1>
          <p>Seu pagamento via <strong>{formaPagamento}</strong> foi registrado.</p>
        </div>
        <button className={styles.btnPagar} onClick={() => onNavigate('home')}>Voltar ao início</button>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1><DollarSign size={32} /> Pagamento</h1>
        <p>Realize o pagamento para finalizar a sua compra</p>
      </div>

      <div className={styles.card}>
        <div className={styles.left}>
          <h3>Detalhes:</h3>
          {cartItems.length === 0 ? (
            <p style={{ color: '#6b7280' }}>Nenhum item no carrinho.</p>
          ) : (
            cartItems.map(item => (
              <div className={styles.item} key={item.id}>
                <img src={item.image || 'https://placehold.co/50x40'} alt={item.name} />
                <span>
                  {item.name} × {item.qty} — R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                </span>
              </div>
            ))
          )}
          <p className={styles.qty}>Quantidade de itens: {totalQty}</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.right}>
          <p className={styles.total}>
            Valor total: <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </p>

          <select
            className={styles.select}
            value={formaPagamento}
            onChange={e => setFormaPagamento(e.target.value)}
          >
            <option value="">Forma de pagamento</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
            <option>Pix</option>
            <option>Dinheiro</option>
          </select>

          <div className={styles.btns}>
            <button className={styles.btnPagar} onClick={handlePagar}>Pagar</button>
            <button className={styles.btnCancelar} onClick={() => onNavigate('home')}>Cancelar compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagamento
