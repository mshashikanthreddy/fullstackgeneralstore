const Shop = require('../models/shop');

exports.getProductDetails = async (req,res,next) => {
    
try{
    await Shop.findAll()
    .then((product) => {
        res.json(product);
    })
}
    catch(err) {
        console.log(err);
    }
}

exports.postProductDetails = async (req,res,next) => {

    const name = req.body.name;
    const description = req.body.description;
    const cost = req.body.cost;
    const quantity = req.body.quantity;

    try{
         const product = await Shop.create({
            name : name ,
            description : description ,
            cost : cost,
            quantity : quantity
        })

            res.json(product);

    }
        catch(err) {
            console.log(err);
        }
    }

exports.updateProductDetails = async (req,res,next) => {

    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const cost = req.body.cost;
    const quantity = req.body.quantity;

    try {
    const product = await Shop.update({

        name : name ,
        description : description ,
        cost : cost ,
        quantity : quantity
        
    },{where:{id : id}})

        res.json(product);

}
    catch(err) {
        console.log(err);
    }

}