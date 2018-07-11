import SMERouter from 'sme-router'
const userhomeController = require('../controllers/userhome.controller')

const router = new SMERouter('router-view')

// // route config
router.route('/home', (req, res, next) => {
    userhomeController.homeRender({req, res, next, router})
})
// router.route('/safety', (req, res, next) => {
//     userhomeController.safetyRender({req, res, next, router})
// })
// router.route('/myHisttory', (req, res, next) => {
//     userhomeController.myHisttoryRender({req, res, next, router})
// })
// router.route('/orders', (req, res, next) => {
//     userhomeController.ordersRender({req, res, next, router})
// })
// router.route('/collections', (req, res, next) => {
//     userhomeController.collectionsRender({req, res, next, router})
// })
router.route('/address', (req, res, next) => {
    userhomeController.addressRender({req, res, next, router})
})
router.route('*', (req, res, next) => {
  res.redirect('/home')
})
