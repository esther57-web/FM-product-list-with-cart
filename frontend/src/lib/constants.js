export const API_URL = 'http://localhost:4000'
export const API_ROUTES = `${API_URL}/api/articles`;
import axios from 'axios';

function formatArticles(articleArray) {
  return articleArray.map((article) => {
    const newArticle = { ...article };
    // eslint-disable-next-line no-underscore-dangle
    newArticle.id = newArticle._id;
    return newArticle;
  });
}

export async function getArticles() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES}`,
    });
    // eslint-disable-next-line array-callback-return
    const articles = formatArticles(response.data);
    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function deleteArticle(id) {
  try {
    await axios.delete(`${API_ROUTES}/${id}`)
    return true
  } catch (err) {
    console.error(err);
    return false
  }
}

export async function addArticleToCart(data) {
  const article = {
    name: data.name,
    price: data.price,
    quantity: 1,
    imageUrl: API_URL+data.image.thumbnail
  };
  const bodyData = JSON.stringify(article);
  console.log(bodyData)
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
  