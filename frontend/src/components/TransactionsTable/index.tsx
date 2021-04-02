import { useTransactions } from '../../hooks/useTransactions'
import { useTransactionModal } from '../../hooks/useTransactionModal'

import { formatMoney, formatDate } from '../../utils'

import editImg from '../../assets/edit.svg'
import deleteImg from '../../assets/delete.svg'
import emptyImg from '../../assets/empty.svg'

import { Container, TableIsEmpty } from './styles'

export function TransactionsTable() {
  const { transactions, setCurrentEditingTransaction } = useTransactions()
  const { handleOpenModal } = useTransactionModal()

  function handleEditModal(id: string) {
    handleOpenModal('editTransaction')
    setCurrentEditingTransaction(id)
  }

  function handleDeleteModal(id: string) {
    handleOpenModal('deleteTransaction')
    setCurrentEditingTransaction(id)
  }
  return (
    <Container>
      {transactions.length ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw'
                    ? formatMoney(transaction.amount * -1)
                    : formatMoney(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.created_at)}</td>
                <td>
                  <button
                    type="button"
                    title="Editar transação"
                    onClick={() => handleEditModal(transaction.id)}
                  >
                    <img src={editImg} alt="caneta" />
                  </button>

                  <button
                    type="button"
                    title="Excluir transação"
                    onClick={() => handleDeleteModal(transaction.id)}
                  >
                    <img src={deleteImg} alt="lixeira" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <TableIsEmpty>
          <img src={emptyImg} alt="Pessoa segurando uma caixa vazia" />
          <p>Nenhuma transação por enquanto</p>
        </TableIsEmpty>
      )}
    </Container>
  )
}
