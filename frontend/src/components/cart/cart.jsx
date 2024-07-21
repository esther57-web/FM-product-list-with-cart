import './cart.css'
import emptyCartImg from './../../../assets/images/illustration-empty-cart.svg'

const Cart = () => {
  return (
    <section className='cart'>
      <h2>Your Cart (0)</h2>
      <img className='empty-img' alt='image panier vide' src={emptyCartImg}></img>
      <h6 className='empty-text'>Your added items will appear here</h6>
    </section>
  )
}

export default Cart