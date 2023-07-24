const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const buyerRoute = require("./app/routes/buyer.routes");
const sellerRoute = require("./app/routes/seller.route");
const productRoute = require("./app/routes/product.route");
const colorRoute = require("./app/routes/color.route");
const sizeRoute = require("./app/routes/size.route");
const productDetailRoute = require("./app/routes/product-detail.route");




const categoryRoute = require("./app/routes/category.route");
const Admin = db.admin;
const Buyer = db.buyer;
const Cart_detail = db.cart_detail;
const Cart = db.cart;
const Category = db.category;
// const Chat_realtime = db.C;

const Chat = db.chat;
const Color = db.color;
const Feedback = db.feedback;
const Like_share = db.like_share;
const Livestream_product = db.livestream_product;
const Livestream = db.livestream;
const Order_detail = db.order_detail;
const Order = db.order;
const Product_detail = db.product_detail;
const Product_review = db.productReview;
const Product = db.product;
const Seller = db.seller;
const Size = db.size;
const Voucher = db.voucher;
// const View = db.view;   được hỗ trợ


//force: true will drop the table if it already exists


// simple route

//
app.use('/api/buyer', buyerRoute);
//
app.use('/api/seller', sellerRoute);

app.use('/api/product', productRoute);

app.use('/api/color', colorRoute);

app.use('/api/size', sizeRoute);

app.use('/api/product-detail', productDetailRoute);

app.use('/api/category', categoryRoute);

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Hello");
  initial();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  
// Thêm categorys
Category.create({
  id: 1,
  category_name: "Thời Trang",
  decription: "Danh mục thời trang",
  image: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
})
Category.create({
  id: 2,
  category_name: "Thiết bị điện tử",
  decription: "Danh mục thiết bị điện tử",
  image: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn"
})

Category.create({
  id: 3,
  category_name: "Máy tính & Laptop",
  decription: "Danh mục máy tính & Laptop",
  image: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"
})

Category.create({
  id: 4,
  category_name: "Đồng hồ",
  decription: "Danh mục đồng hồ",
  image: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn"
})

Category.create({
  id: 5,
  category_name: "Nhà sách",
  decription: "Danh mục nhà sách",
  image: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn"
})

Category.create({
  id: 6,
  category_name: "Thiết bị gia dụng",
  decription: "Danh mục thiết bị gia dụng",
  image: "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn"
})

Category.create({
  id: 7,
  category_name: "Máy ảnh & Máy quay phim",
  decription: "Danh mục máy ảnh và máy quay phim",
  image: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn"
})

Category.create({
  id: 8,
  category_name: "Sắc đẹp",
  decription: "Danh mục sắc đẹp",
  image: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn"
})

Category.create({
  id: 9,
  category_name: "Túi xách",
  decription: "Danh mục túi xách",
  image: "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn"
})

Category.create({
  id: 10,
  category_name: "Sức khỏe",
  decription: "Danh mục sức khỏe",
  image: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn"
})

/////////////////////////////////////////////

// Thêm Color

Color.create({
  id: 1,
  color_name: "RED",
})
Color.create({
  id: 2,
  color_name: "BLACK",
})
Color.create({
  id: 3,
  color_name: "WHITE",
})


//////////////////////////////////////////////

// Thêm Size

Size.create({
  id: 1,
  size_name: "S",
})
Size.create({
  id: 2,
  size_name: "M",
})
Size.create({
  id: 3,
  size_name: "L",
})

//////////////////////////////////////////////

// Thêm Seller

Seller.create({
  id: 1,
  username: "seller01",
  password: "123456",
  fullname: "Nguyễn Sinh Nhựt",
  email: "sn@gmail.com",
  description: "Đây là trang của seller01",
  phone_number: "0337519011",
  address: "Hồ Chí Minh city",
  avatar: "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"

})

Seller.create({
  id: 2,
  username: "seller02",
  password: "123456",
  fullname: "Trần Huy Hoàng",
  email: "hh@gmail.com",
  description: "Đây là trang của seller02",
  phone_number: "0337519022",
  address: "Thủ Đức city",
  avatar: "https://toigingiuvedep.vn/wp-content/uploads/2023/03/hinh-anh-avatar-dep-nam-ngau-cool.jpg"

})

Seller.create({
  id: 3,
  username: "seller03",
  password: "123456",
  fullname: "Lê Nam Tiến Thành",
  email: "tt@gmail.com",
  description: "Đây là trang của seller02",
  phone_number: "0337519033",
  address: "Thủ Đức city",
  avatar: "https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-dep-nam-chat-ngau.jpg"

})



/////////////////////////////////////////////

// Thêm Product
// https://www.lazada.vn/products/ao-khoac-bomber-teddy-nam-nu-dai-tay-phoi-vien-soc-form-rong-thoi-trang-yodi-ao-khoac-nam-046-i2035221893-s10656435485.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%2525C3%2525A1o%252Bkho%2525C3%2525A1c%253Bnid%253A2035221893%253Bsrc%253ALazadaMainSrp%253Brn%253A6b41c8d3a31b32da78bfe2018bd88e8a%253Bregion%253Avn%253Bsku%253A2035221893_VNAMZ%253Bprice%253A62000%253Bclient%253Adesktop%253Bsupplier_id%253A100219242%253Bpromotion_biz%253A%253Basc_category_id%253A7952%253Bitem_id%253A2035221893%253Bsku_id%253A10656435485%253Bshop_id%253A210904&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=1&lang=en&location=H%C3%A0%20N%E1%BB%99i&price=6.2E%204&priceCompare=&ratingscore=4.339250493096647&request_id=6b41c8d3a31b32da78bfe2018bd88e8a&review=507&sale=2006&search=1&source=search&spm=a2o4n.searchlist.list.i40.2671f7d0wvNCf8&stock=1
Product.create({
  id: 1,
  product_name: "Áo khoác nam",
  description: "Sản phẩm áo khoác nam",
  brand: "levi",
  discount_value: 20000,
  image: "https://lzd-img-global.slatic.net/g/p/eec16aefb0838a9659a4483b2fe2e3cb.jpg_720x720q80.jpg_.webp",
  categoryId:1,
  sellerId: 1,
})


/////////////////////////////////////////////

// Thêm Product_detail

/////////////////////////////////////////////


// Thêm Người mua

/////////////////////////////////////////////
// Thêm Voucher


////////////////////////////////////////////


}