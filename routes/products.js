const express = require("express");
const { getAll , getOne, createOne , updateOne , deleteOne } = require("../db/productsQuery");



const router = express.Router();


router.get("/:id?", async (req, res, next) => {
    let { id } = req.params;
    let data;
    try {
        if(id){ 
            data = await getOne(id)
            res.json(data)
        }else{
            data = await getAll();
            res.json(data)
        }
        
    } catch (err) {
        next(err)
    }

})


router.post("/", async (req, res, next) => {
    
    let productDetails = req.body;

    try {
        let { insertId } =  await createOne(productDetails);
        res.json({msg: "You have successfully added a new product", insertId})
        
    } catch (err) {
        next(err);
    }

})


router.put("/:id",  async (req, res, next) => {

    let productDetails = req.body;
    let { id } = req.params;


    try {
        if(isNaN(parseInt(id))){
            res.statusCode = 400;
            res.json({
                msg: `You must provide a vaild EmployeeId of type: int`, value: id, success: false,
            })
        }

        let results = await updateOne(productDetails , id);
        res.json({msg: "You have successfully added a new product" , id})
        
    } catch (error) {
        next(error)
    }

})


router.delete("/:id", async (req, res, next) => {
    let { id } = req.params;

    try {
        if(isNaN(parseInt(id))){
            res.statusCode = 400;
            res.json({
                msg: `You must provide a vaild productId of type: int`, value: id, success: false,
            })
            
    }
    id = parseInt(id)

    let results = await deleteOne(id);
    res.json({msg: "Successfully deleted product", id})
} catch (err) {
    next(err)
}

})

module.exports = router;