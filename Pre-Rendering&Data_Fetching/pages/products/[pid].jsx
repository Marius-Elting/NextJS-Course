import React, { Fragment } from 'react'
import fs from "fs/promises"
import path from "path"


const ProductDetailPage = (props) => {
    const { loadedProduct } = props

    if (!loadedProduct) {
        return <p>Loading...</p>
    }
    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    )
}


const getData = async () => {
    const filePath = path.join(process.cwd(), "dummy-backend.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return data
}


export async function getStaticProps(context) {
    const { params } = context
    const productID = params.pid
    const data = await getData()
    const product = data.products.find(product => product.id === productID)
    if (!product) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            loadedProduct: product
        }
    }
}


export async function getStaticPaths() {
    const data = await getData()
    const ids = data.products.map(data => data.id)
    const params = ids.map(id => ({ params: { pid: id } }))
    return {
        paths: params,
        fallback: false
        // fallback: "blocking"
        // fallback: true
    }
}

export default ProductDetailPage
