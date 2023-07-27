const config = require("../config/db.config.js");

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
//------OK--------------//
db.category = require("../models/category.js")(sequelize, DataTypes);
db.product = require("../models/product.js")(sequelize, DataTypes);
db.role = require("../models/role.js")(sequelize, DataTypes);
db.user_role = require("../models/user_role.js")(sequelize, DataTypes);
db.user = require("../models/user.js")(sequelize, DataTypes);
db.store = require("../models/store.js")(sequelize, DataTypes);
db.follow = require("../models/follow.js")(sequelize, DataTypes);

db.cart = require("../models/cart.js")(sequelize, DataTypes);
db.cart_product = require("../models/cart_product.js")(sequelize, DataTypes);
db.feedback = require("../models/feedback.js")(sequelize, DataTypes);
db.product_review = require("../models/product_review.js")(sequelize, DataTypes);

db.order_voucher = require("../models/order_voucher.js")(sequelize, DataTypes);
db.order = require("../models/order.js")(sequelize, DataTypes);
db.voucher = require("../models/voucher.js")(sequelize, DataTypes);


db.amount_discount = require("../models/amount_discount.js")(sequelize, DataTypes);
db.percentage_discount = require("../models/percentage_discount.js")(sequelize, DataTypes);
db.livestream = require("../models/livestream.js")(sequelize, DataTypes);
db.livestream_product = require("../models/livestream_product.js")(sequelize, DataTypes);
db.size = require("../models/size.js")(sequelize, DataTypes);
db.color = require("../models/color.js")(sequelize, DataTypes);
db.product_detail = require("../models/product_detail.js")(sequelize, DataTypes);
db.notification = require("../models/notification.js")(sequelize, DataTypes);
db.order_detail = require("../models/order_detail.js")(sequelize, DataTypes);
/*
// user - role (N->N) -> Tạo thêm bảng user_role
- thiếu role và user_role
// user - store (1->1) -> Tạo bảng store bỏ khóa userId vào làm khóa ngoại

// // store-user (N->N) -> Tạo bảng follow
- thiếu bảng follow
/////////////////////////////
// chưa thêm dữ liệu voucher
// store-voucher (1->N): tạo bảng voucher và gắn storeId làm khóa ngoại.
// cart - product (N->N) -> Tạo thêm bảng cart_product
- thiếu cart và thiếu cart_product
// user - cart (1->1) -> Tạo bảng cart thêm userId làm khóa ngoại
// user - feedback (1->N) -> Tạo bảng feedback thêm userId làm khóa ngoại
- thiếu bảng feedback
// giống nhau
// user - product_review (1->N) -> Tạo bảng product_review thêm userId làm khóa ngoại
// product - product_review (1-> N) -> Tạo bảng product_review thêm productId làm khóa ngoại
- thiếu bảng product_review
// order - voucher (N-N) -> tạo bảng order_voucher
- thiếu bảng order_voucher
// livestream-product (N-N) -> Tạo bảng livestream-product
- thiếu bảng livestream-product

/*
// product_detail (quan hệ cấp 3 giữa: Product-Size-Color)
- thiếu bảng product_detail (nhớ thêm cái cài đặt index)
*/

//------OK----------------//
/*

//---------------------------//
- Thêm dữ liệu:


notification


//-------------------------------------//
Đã thêm:

order_detail
order_voucher
order
cart_product
product_review

feedback

percentage_discount
amount_discount
user_role
voucher
livestream_product
livestream

follow
user
category
role
size
store
color
product
cart
product_detail

*/

//--------------------//

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Product = db.product;
const Category = db.category;
const Role = db.role;
const User = db.user;
const Store = db.store;
const Follow = db.follow;
const Voucher = db.voucher;
const Cart = db.cart;
const Cart_product = db.cart_product;
const Feedback = db.feedback;
const Product_review = db.product_review;
const Order_voucher = db.order_voucher;
const Order = db.order;
const Percentage_discount = db.percentage_discount;
const Amount_discount = db.amount_discount;
const Livestream = db.livestream;
const Livestream_product = db.livestream_product;
const Size = db.size;
const Color = db.color;
const Product_detail = db.product_detail;
const Notification = db.notification;
const Order_detail = db.order_detail;
const User_role = db.user_role;
Object.keys(db).forEach(index => {
  if(db[index].associate){
    db[index].associate({Product, Category, Role, User, Store, Follow, Cart, Cart_product, Feedback, Product_review, Order_voucher, Order, Percentage_discount, Amount_discount, Livestream, Livestream_product, Color, Size, Product_detail, Notification, Order_detail, User_role, Voucher});
  }
})

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;


