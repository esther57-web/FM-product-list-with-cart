//import { useState } from 'react'

import AllArticles from "./components/allArticles/allArticles.jsx"
import Cart from "./components/cart/cart.jsx"


function App() {
 
  return (
    <main>
      <section className="articles-section">
        <h1>Dessert</h1>
        <AllArticles />
      </section>
      <Cart />
    </main>  
  )
}

export default App
