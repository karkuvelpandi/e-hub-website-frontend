import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import Footer from '../../components/Footer/Footer'
import './Product.css'
import { ProductCard } from './components/ProductCard'
const Products = ({ context = "" }) => {

  let [products, setProducts] = useState([])
  let [err, setErr] = useState("")

  useEffect(() => {
    Axios.get("https://cute-hare-attire.cyclic.app/product/").then((res) => {
      setProducts(res.data)
    }).catch((er) => { setErr(er) })
  }, [])

  return <>

    <div className={`container mt-5 flex flex-1 
    ${context === "Home" && "md:relative md:bottom-56 md:z-20"}
    ` } style={{ minHeight: "50vh" }}>
      {/* <pre>{JSON.stringify(products)}</pre> */}
      <div className="row flex flex-wrap justify-center gap-x-4 gap-y-4">
        {
          products.length > 0 ? <>
            {
              products.map((product, index) => {
                return <ProductCard key={index} index={index} product={product} />
              })
            }
          </> : <>No Products are created</>
        }
      </div>
    </div>
    <Footer />
  </>
}

export default Products
