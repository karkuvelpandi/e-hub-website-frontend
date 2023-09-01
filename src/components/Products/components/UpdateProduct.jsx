import React from 'react'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { categories } from '../Category'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, updateProduct } from '../product.slice'

const Edit = () => {
    const dispatch = useDispatch()
    let [productID, setProductId] = useState(useParams().id)
    let [selectedproduct, setSelectedProduct] = useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: "",
        category: ""
    })
    let [submitted, setSubmitted] = useState(false)
    // let [errorMsg, setErrorMsg] = useState("")
    // let setID = (id) => {
    //     setProductId(id)
    // };
    const currentProduct = useSelector((state) => state.product.currentProduct)

    useEffect(() => {
        dispatch(getProduct(productID))
    }, [dispatch, productID])

    let changeInput = (event) => {
        setSelectedProduct({
            ...selectedproduct,
            [event.target.name]: event.target.value
        })
    }

    //Change image to string

    let changeImage = (event) => {
        let imageFile = event.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            if (reader.result) {
                setSelectedProduct({ ...selectedproduct, image: reader.result })
            }
        })
    }


    let submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateProduct(productID))
        setSubmitted(true)
    }

    return <>
        <div className="container mt-5">
            {
                submitted ? <><Navigate to='/productAdmin' /></> : <>
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="card">
                                <div className="card-header bg-dark text-white text-center"><h1>Edit Product</h1></div>
                                <div className="card-body bg-secondary">
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input type="text" name="name" value={currentProduct.name} placeholder='Product Name' className='form-control' onChange={changeInput} />
                                        </div>
                                        <div className="form-group">
                                            <input type="file" name="image" placeholder='Image' className='form-control' onChange={changeImage} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="price" value={currentProduct.price} placeholder='Price' className='form-control' onChange={changeInput} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name="qty" value={currentProduct.qty} placeholder='QTY' className='form-control' onChange={changeInput} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="info" value={currentProduct.info} placeholder='Information' className='form-control' onChange={changeInput} />
                                        </div>
                                        <div className="form-group w-full">
                                            <select name="category" id="" value={currentProduct.category} onChange={changeInput}>
                                                <option value="">Select product</option>
                                                {
                                                    categories.map((category, index) => {
                                                        if (category.categoryName)
                                                            return <option key={index} value={category.categoryName}>{category.title}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <input type="submit" value="Update Product" className='btn btn-dark' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    </>
}

export default Edit