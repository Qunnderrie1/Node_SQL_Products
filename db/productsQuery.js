const query = require("./index.js");


const getAll = async () => {

    return await query("SELECT * FROM products");
}


const getOne = async(id) => {

    return await query("SELECT * FROM products WHERE productId = ?" , [id]);
}

const createOne = async(product) =>{

    return await query("INSERT INTO products SET ?" , [product]);
}

const updateOne = async (product , productId) =>{

    return await query("UPDATE products SET ?  WHERE productId  = ? " , [product , productId]);
}

const deleteOne = async (productId) =>{

    return await query("DELETE FROM products WHERE productId = ?" , [productId]);
}



module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}