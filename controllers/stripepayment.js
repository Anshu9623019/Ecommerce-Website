require("dotenv").config;
const stripe =  require("stripe")(`${process.env.STRIPEKEY}`)
const uuid = require("uuid/v4")

exports.makepayment = (req,res)=>{
//
const {products,token} = req.body;
console.log("PRODUCT",products)
    let amount = 0;
    products.map((p)=>{
      amount = amount + p.price;
    });

    const idempotencyKey = uuid();

    return stripe.customers.create({
        email : token.email,
        source : token.id
    }).then(customer=>{
        stripe.charges.create({
            amount : amount,
            currency : 'usd',
            customer : customer.id,
            receipt_email : token.email,
            shipping : {
                name : token.card.name,
                address : {
                    address_line1 : token.card.address_line1,
                    address_city : token.card.address_city,
                    address_zip : token.card.address_zip,
                    country : token.card.country
                }
            }
        },{idempotencyKey})
        .then(result =>res.status(200).json(result))
        .catch(err=>console.log(err))
    })

}