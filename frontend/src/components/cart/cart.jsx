import './cart.css'
import emptyCartImg from './../../../assets/images/illustration-empty-cart.svg'
import { getArticles, deleteArticle } from '../../lib/constants'
import { useEffect, useState } from 'react'
import deleteBtn from './../../../assets/images/icon-remove-item.svg'
import carbonIcon from './../../../assets/images/icon-carbon-neutral.svg'

const Cart = () => {
  let [cartQuantity, setCartQuantity] = useState(0)
  let [cartPrice, setCartPrice] = useState(0)
  let [articles, setArticles] = useState([])
  useEffect(() => {
    async function getItem() {
      const fetchedArticles = await getArticles();
      if (fetchedArticles) {
        setArticles(fetchedArticles)
        const totalQuantity = fetchedArticles.reduce((total, fetchedArticle) => total + fetchedArticle.quantity, 0);
        setCartQuantity(totalQuantity);
        const totalPrice = fetchedArticles.reduce((total, fetchedArticle) => total + (fetchedArticle.quantity * fetchedArticle.price), 0);
        setCartPrice(totalPrice);
      }
    }
    getItem();
  }, []);

  async function removeFromCart(id) {
    const removeArticle = await deleteArticle(id)
    if (!removeArticle.error) {
      console.log("article supprimé")
    }
    //quantité 0
  }
 
  return (
    <section className='cart'>
      <h2>Your Cart ({cartQuantity})</h2>
      {cartQuantity === 0 && (<div className='empty-cart'><img className='empty-img' alt='image panier vide' src={emptyCartImg}></img>
      <h6 className='empty-text'>Your added items will appear here</h6></div>)}
      {cartQuantity > 0 && (<div className='full-cart'>
        {articles.map((article)=> {
          return <div className='cart-article' key={article.id}>
            <div className='cart-article-info'>
              <h6>{article.name}</h6>
              <div className='cart-article-price'>
                <p id='cart-article-quantity'>{article.quantity}x</p>
                <p id='cart-article-price'>@ ${article.price}</p>
                <p id='cart-article-total-price'>${article.quantity*article.price}</p>
              </div>
            </div>
            <img src={deleteBtn} onClick={()=>{removeFromCart(article.id)}}></img>
          </div>
        })}
        <div className='cart-total-section'>
          <p id='total-text'>Order Total</p>
          <p id='total-price'>${cartPrice}</p>
        </div>
        <div className='carbon-section'>
          <img src={carbonIcon}></img>
          <p>This is a <span>carbon neutral</span> delivery</p>
        </div>
        <button>Confirm Order</button>
      </div>)}
    </section>
  )
}

export default Cart