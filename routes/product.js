import {Router} from 'express'
import { deleteProduct, getAllProduct, getDetailProduct, postProduct } from '../controllers/products'

const router = Router()
router.get('/products', getAllProduct)
router.get('/products/:id', getDetailProduct)
router.delete('/products/:id', deleteProduct)
router.post('/products/add', postProduct)
// router.get('/products', getAllProduct)
export default router