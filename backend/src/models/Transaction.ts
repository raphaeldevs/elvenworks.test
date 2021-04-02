import { Column, Entity, PrimaryColumn } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('transactions')
export class Transaction {
  @PrimaryColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  amount: number

  @Column()
  type: 'deposit' | 'withdraw'

  @Column()
  category: string

  @Column()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
