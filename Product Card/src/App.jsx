import React from 'react'
import ProductCard from './componets/product/index'
import {Data} from './componets/data/data.js'
import './componets/product/index.css'

function App() {


console.log(Data);

  return (
    <>
      {Data.products.map( product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </>
  )

};

export default App
