import { FormEvent, useEffect, useState } from 'react'

import Modal from 'react-modal'

import { useTransactions } from '../../../hooks/useTransactions'

import { useTransactionModal } from '../../../hooks/useTransactionModal'

import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'

import { Container, TransactionTypeContainer, Button } from './styles'

Modal.setAppElement('#root')

export function EditTransactionModal() {
  const { editTransaction, editingTransaction } = useTransactions()
  const { isEditTransationModalOpen, handleCloseModal } = useTransactionModal()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    setAmount(editingTransaction.amount)
    setTitle(editingTransaction.title)
    setType(editingTransaction.type)
    setCategory(editingTransaction.category)
  }, [editingTransaction])

  function onRequestClose() {
    handleCloseModal('editTransaction')
  }

  async function handleEditTransaction(event: FormEvent) {
    event.preventDefault()

    await editTransaction(editingTransaction.id, {
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isEditTransationModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" title="Fechar modal" />
      </button>

      <Container onSubmit={handleEditTransaction}>
        <h2>Editar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <Button
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </Button>

          <Button
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
          </Button>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Salvar alterações</button>
      </Container>
    </Modal>
  )
}
