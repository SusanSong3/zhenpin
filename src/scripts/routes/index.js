import SMERouter from 'sme-router';
const home = require('../views/home.html');

const columnController = require('../controllers/column.controllers');
const columnSetController = require('../controllers/columnSet.controllers');
const productAddController = require('../controllers/productAdd.controllers');
const productController = require('../controllers/product.controllers');
const customerController = require('../controllers/customer.controllers');
const ordersController = require('../controllers/orders.controllers');

const router = new SMERouter('router-prolist');



router.route('/home', (req, res, next) => {
    res.render(home)
});
// 生成私钥：
// ssh-keygen -t rsa -b 2048 -f private.key
//
// 生成公钥：
// openssl rsa -in private.key -pubout -outform PEM -out public.key


/*------栏目管理------*/
router.route('/column', (req, res, next) => {
    columnController.render({req, res, next, router})
    columnController.event()
});

/*------栏目设置------*/
router.route('/columnSet', (req, res, next) => {
    columnSetController.render({req, res, next, router})
    columnSetController.inputfile()
});

/*------商品管理------*/
router.route('/products', (req, res, next) => {
    productController.productListPos({req, res, next, router})
});


/*------商品添加------*/
router.route('/productAdd', (req, res, next) => {
    productController.productsAddPos({req, res, next, router})
});

/*------商品编辑------*/
router.route('/productEdit', (req, res, next) => {
    productController.productEditPos({req, res, next, router})
});


/*------用户管理------*/
router.route('/customer', (req, res, next) => {
    customerController.render({req, res, next, router})
    customerController.event()
});

/*------订单管理------*/
router.route('/orders', (req, res, next) => {
    ordersController.render({req, res, next, router})
    // ordersController.event()
});

