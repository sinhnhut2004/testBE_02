const db = require("../models");

const Product = db.product;
const Seller = db.seller;
const Color = db.color;
const Size = db.size;
const Category = db.category;
const Voucher = db.voucher;
// const {Order_voucher, Order, Store} = require('../models')
const Store = db.store;
const Order_voucher = db.order_voucher;
const Order = db.order;

const getAll = async (req, res) => {
  const getVoucher = await Voucher.findAll({
    include: [
        {
            model: Order,
        }
    ]
    // include: [
    //   {
       
    //     model: Category,
    //     // as: "sellers",
    //   },
      
    //   // {
    //   //   model: Category,
    //   //   as: "categories",
    //   // },
    //   // {
    //   //   model: Size,
    //   //   as: 'sizes'
        
    //   // },
    //   // {
    //   //   model: Color,
    //   //   as: 'colors'
        
    //   // },
    // ],
  });

  return res.status(201).json(getVoucher);
};

const create = async (req, res) => {
  await Order_voucher.create({
    orderId: req.body.orderId,
    voucherId: req.body.voucherId,
  })
    .then((Order_voucher) => {
      res.send({
        message: "Product created successful",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { getAll, create };
