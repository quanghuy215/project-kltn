const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router
  .route('/products')
  .get(productCtrl.getProducts)
  .post(auth, authAdmin, productCtrl.createProduct);

router
  .route('/products/:id')
  .delete(auth, authAdmin, productCtrl.deleteProduct)
  .put(auth, authAdmin, productCtrl.updateProduct);

router.route('/productName').get(productCtrl.getProductName);
router.route('/productSold').get(productCtrl.getProductSold);

module.exports = router;
