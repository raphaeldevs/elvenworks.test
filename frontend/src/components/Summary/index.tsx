import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'

import { formatMoney } from '../../utils'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

type SummaryReduceOperations = {
  [operationName: string]: () => void
}

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((accumulator, transaction) => {
      const { type, amount } = transaction

      const operation: SummaryReduceOperations = {
        deposit: () => {
          accumulator.deposits += amount
          accumulator.total += amount
        },
        withdraw: () => {
          accumulator.withdraws -= amount
          accumulator.total -= amount
        }
      }

      operation[type]()

      return accumulator
    },
    { deposits: 0, withdraws: 0, total: 0 }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {formatMoney(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {formatMoney(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Saídas" />
        </header>
        <strong>
          {formatMoney(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
