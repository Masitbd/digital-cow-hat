import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/create-user', UserController.createUser)
router.get('/:id', UserController.getSingleUser)
router.get('/', UserController.getAllUser)
router.delete('/:id', UserController.deleteUser)
router.patch('/:id', UserController.updateUser)

export const UserRoutes = router
