const voucherRoute = require("express").Router();
const voucherController = require("../controllers/voucher.controller");

voucherRoute.get('/', voucherController.getAll);
voucherRoute.post('/', voucherController.create);

module.exports = voucherRoute;
