const Product = require('../models/product')

const createProduct =  async (data)=>{
    try {
        const newProduct = {
            name: data.name,
            price:data.price,
            category:data.category,
            img:data.img,
            description:data.description
        }
        
        const product = await new Product(newProduct).save();
        return product;
        
    } catch (error) {
        console.error(error)
    }
}
const deleteProduct= async (id)=>{
    try {
        const product = await Product.findOneAndDelete({id:id});
        return product
    } catch (error) {
        console.log(error)
    }
}
const getAllProducts= async ()=>{
    try {
        const product = await Product.find()
        return product
    } catch (error) {
        console.log(error)
    }
}
const getProduct = async (id)=>{
    try {
        const product = await Product.findById(id)
        return product;
    } catch (error) {
        console.log(error)
    }
}

const updateProduct= async(id, data) =>{
    try {
        const product = await  Product.findOneAndUpdate({id:id}, data, {new: true})
        return product;
    } catch (error) {
        console.log(error)
    }
}
const getProdctByCategory = async (data) =>{
    try {
        let product;
        if(data.sort){ 
          let criteria = (data.sort == 'inc') ? '' : '-';
          product = Product.find({category :data.id}).sort(criteria +'price')
        }else if(data.filter){
            if(data.lessThanPrice && data.moreThanPrice){
                product = Product.find({category :data.id, $lt: data.lessThanPrice, $gt: data.moreThanPrice})
            }else{
                product = Product.find({category :data.id})

            }
        }else{
            product = Product.find({category: data.id})
        }
        return product;
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    createProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    getProdctByCategory
}