const ProductService = require('../services/productService')


const createProduct = async (req,res) =>{
    try {
        const product = await ProductService.createProduct(req.body)
        res.status(200).json({
            success: true,
            message:'succesfully created product',
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}
const updateProduct = async (req,res) =>{
    try {
        const product = await ProductService.updateProduct(req.params.id,req.body)
        res.status(200).json({
            success: true,
            message:'succesfully updated the category',
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}

const removeProduct =async (req,res) =>{
    try {
        const product = await ProductService.deleteProduct(req.params,id)
        res.status(200).json({
            success: true,
            message:'succesfully removed category',
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}
const getProduct =async (req,res) =>{
    try {
        const product = await ProductService.getProduct(req.params.id)
        res.status(200).json({
            success: true,
            message:'succesfully fetched a category',
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}

const getAllProducts =async (req,res) =>{
    try {
        const product = await ProductService.getAllProducts()
        res.status(200).json({
            success: true,
            message:'succesfully fetched all categories',
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}
const getProductsByCategory = async (req,res) =>{
    try {
        const product = await ProductService.getProdctByCategory(req.query)
        res.status(200).json({
            success: true,
            message:'succesfully fetched product by category',
            data: product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}
module.exports = {
    createProduct,
    removeProduct,
    updateProduct,
    getAllProducts,
    getProduct,
    getProductsByCategory
}

