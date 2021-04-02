import { EntityRepository, Repository } from 'typeorm'
import { Transaction } from '../models/Transaction'

@EntityRepository(Transaction)
export class TransactionsRepository extends Repository<Transaction> {}
