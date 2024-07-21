const API_ROUTES = 'http://localhost:4000/api/articles';
import axios from 'axios';

export async function addArticleToCart(data) {
    const article = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      imageUrl: data.image
    };
    const bodyFormData = new FormData();
    bodyFormData.append('article', JSON.stringify(article));
  
    try {
      return await axios({
        method: 'post',
        url: `${API_ROUTES}`,
        data: bodyFormData,
      });
    } catch (err) {
      console.error(err);
      return { error: true, message: err.message };
    }
  }

export async function updateQuantity(data, id) {
    let newData;
    const article = {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        imageUrl: data.image
      };
      newData = { ...article };
  
    try {
      const newArticle = await axios({
        method: 'put',
        url: `${API_ROUTES}/${id}`,
        data: newData,
      });
      return newArticle;
    } catch (err) {
      console.error(err);
      return { error: true, message: err.message };
    }
}
  