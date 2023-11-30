import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { GET_ALL_PRODUCTS_BY_ID } from '../Services/productService'

const ProductsDetail = () => {
    const [product, setProduct] = useState({})
    let { id } = useParams()


    useEffect(() => {

       GET_ALL_PRODUCTS_BY_ID(id).then(
            response => {
                console.log("Product By ID : ", response)
                setProduct(response)
            }
        ).catch(error => {
            console.log("ERROR GETTING PRODUCT : ", error)
        })
    }, [])

    return (
        <div>
            <h1> Product Details {id} </h1>
            <h2>Helllo</h2>

        </div>
    )
}

export default ProductsDetail
