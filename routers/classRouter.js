import express from 'express'
import { createClass, getAllClasses } from '../controllers/classController.js'

const router = express.Router()

router.get('/getall', getAllClasses)
router.post('/', createClass)

export default router