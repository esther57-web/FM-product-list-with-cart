import PropTypes from 'prop-types'
import cartIcon from './../../../assets/images/icon-add-to-cart.svg';
import { useState } from 'react';
import minus from './../../../assets/images/icon-decrement-quantity.svg'
import plus from './../../../assets/images/icon-increment-quantity.svg'
//import { addArticleToCart, updateQuantity } from '../../lib/constants';
const API_ROUTES = 'http://localhost:4000/api/articles';
import axios from 'axios';


const Articles = props => {
    let [itemQuantity, setItemQuantity] = useState(0)

    async function addArticleToCart(props) {
        const article = {
          name: props.name,
          price: props.price,
          quantity: itemQuantity,
          imageUrl: props.image.thumbnail
        };
        const bodyData = JSON.stringify(article);
      
        try {
          return await axios({
            method: 'post',
            url: `${API_ROUTES}`,
            data: bodyData,
          });
        } catch (err) {
          console.error(err);
          return { error: true, message: err.message };
        }
      }
    

  return (
    <article className='article' key={props.index}>
                <picture className={`article-img ${itemQuantity !== 0 ? 'in-stock' : null}`}> 
                    <source media='(max-width: 768px)' srcSet={props.image.mobile}></source>
                    <source media='(max-width: 1000px)' srcSet={props.image.tablet}></source>
                    <img src={props.image.desktop} alt={props.name}></img>
                </picture>
                <div>
                    {itemQuantity === 0 && (<div className='add-to-cart-btn' onClick={() => {setItemQuantity(1);addArticleToCart();}}>
                        <img src={cartIcon} alt='Add to Cart'></img>
                        <p>Add to Cart</p>
                    </div>)}
                    { itemQuantity !== 0 && (<div className='change-quantity-btn'>
                        <img src={minus} onClick={() => setItemQuantity(itemQuantity--)} alt='diminuer la quantité'></img>
                        <p>{itemQuantity}</p>
                        <img src={plus} onClick={()=> setItemQuantity(itemQuantity++)} alt='augmenter la quantité'></img>
                    </div>)}
                    <div className='article-info'>
                        <h4 className='category'>{props.category}</h4>
                        <h3 className='name'>{props.name}</h3>
                        <h5 className='price'>${props.price}</h5>
                    </div>
                </div>
            </article>
  )
}

Articles.propTypes = {
    index: PropTypes.number,
    image: PropTypes.object,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}

export default Articles