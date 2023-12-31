const Category = require('../models/category')

const createCategory =  async (data)=>{
    try {
        const newCategory = {
            name: data.name,
            id: data.id
        }
        
        const category = await new Category(newCategory).save();
        return category;
        
    } catch (error) {
        console.error(error)
    }
}
const deleteCategory = async (id)=>{
    try {
        const category = await Category.findOneAndDelete({id:id});
        return category
    } catch (error) {
        console.log(error)
    }
}
const getAllCategories = async ()=>{
    try {
        const category = await Category.find()
        return category
    } catch (error) {
        console.log(error)
    }
}
const getCategory = async (id)=>{
    try {
        const category = await Category.findById(id)
        return category;
    } catch (error) {
        console.log(error)
    }
}

const updateCategory = async(id, data) =>{
    try {
        const category = await  Category.findOneAndUpdate({id:id}, data, {new: true})
        return category;
    } catch (error) {
        console.log(error)
    }
}
module.exports ={
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategory,
    updateCategory
}