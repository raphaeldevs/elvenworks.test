import { Request, Response } from 'express'

import { getCustomRepository } from 'typeorm'
import { TransactionsRepository } from '../repositories/TransactionsRepository'

export const TransactionsController = {
  async create(request: Request, response: Response) {
    const { title, amount, type, category } = request.body

    const transactionsRepository = getCustomRepository(TransactionsRepository)

    const transaction = transactionsRepository.create({
      title,
      amount,
      type,
      category
    })

    await transactionsRepository.save(transaction)

    return response.status(201).json(transaction)
  },

  async show(request: Request, response: Response) {
    const transactionsRepository = getCustomRepository(TransactionsRepository)

    const allTransactions = await transactionsRepository.find()

    return response.json(allTransactions)
  },

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { title, amount, type, category } = request.body

    const transactionsRepository = getCustomRepository(TransactionsRepository)

    const transaction = await transactionsRepository.findOne({ id })

    const updatedTransaction = {
      ...transaction,
      title,
      amount,
      type,
      category
    }

    await transactionsRepository.save(updatedTransaction)

    return response.json({ message: 'Transação atualizada com sucesso!' })
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const transactionsRepository = getCustomRepository(TransactionsRepository)

    await transactionsRepository.delete({ id })

    return response.json({ message: 'Transação deletada com sucesso!' })
  }
}
