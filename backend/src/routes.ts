import { Request, Response, Router } from 'express'

import { TransactionsController } from './controllers/TransactionController'

export const router = Router()

router.get('/transactions', TransactionsController.show)
router.post('/transactions', TransactionsController.create)
router.put('/transactions/:id', TransactionsController.update)
router.delete('/transactions/:id', TransactionsController.delete)
