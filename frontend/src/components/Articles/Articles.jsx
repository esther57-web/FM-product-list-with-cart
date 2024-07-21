import PropTypes from 'prop-types'
import cartIcon from './../../../assets/images/icon-add-to-cart.svg';
import { useState } from 'react';
import minus from './../../../assets/images/icon-decrement-quantity.svg'
import plus from './../../../assets/images/icon-increment-quantity.svg'

const Articles = props => {
    let [itemQuanity, setItemQuantity] = useState(0)
  return (
    <article className='article' key={props.index}>
                <picture className={`article-img ${itemQuanity !== 0 ? 'in-stock' : null}`}> 
                    <source media='(max-width: 768px)' srcSet={props.image.mobile}></source>
                    <source media='(max-width: 1000px)' srcSet={props.image.tablet}></source>
                    <img src={props.image.desktop} alt={props.name}></img>
                </picture>
                <div>
                    {itemQuanity === 0 && (<div className='add-to-cart-btn' onClick={() => setItemQuantity(1)}>
                        <img src={cartIcon} alt='Add to Cart'></img>
                        <p>Add to Cart</p>
                    </div>)}
                    { itemQuanity !== 0 && (<div className='change-quantity-btn'>
                        <img src={minus} onClick={() => setItemQuantity(itemQuanity--)} alt='diminuer la quantité'></img>
                        <p>{itemQuanity}</p>
                        <img src={plus} onClick={()=> setItemQuantity(itemQuanity++)} alt='augmenter la quantité'></img>
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