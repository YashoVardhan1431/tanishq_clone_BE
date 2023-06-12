const CategoryService = require("../services/categoryService");

const createCategory = async (req,res) =>{
    try {
        const category = await CategoryService.createCategory(req.body)
        res.status(200).json({
            success: true,
            message:'succesfully created category',
            data: category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}
const updateCategory = async (req,res) =>{
    try {
        const category = await CategoryService.updateCategory(req.params.id,req.body)
        res.status(200).json({
            success: true,
            message:'succesfully updated the category',
            data: category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}

const removeCategory =async (req,res) =>{
    try {
        const category = await CategoryService.deleteCategory(req.params,id)
        res.status(200).json({
            success: true,
            message:'succesfully removed category',
            data: category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}
const getCategory =async (req,res) =>{
    try {
        const category = await CategoryService.getCategory(req.params.id)
        res.status(200).json({
            success: true,
            message:'succesfully fetched a category',
            data: category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:'something went wrong in the controller'
        })
    }
}

const getAllCategories =async (req,res) =>{
    try {
        const category = await CategoryService.getAllCategories()
        res.status(200).json({
            success: true,
            message:'succesfully fetched all categories',
            data: category
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
    createCategory,
    removeCategory,
    updateCategory,
    getAllCategories,
    getCategory
}

