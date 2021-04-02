import { FormEvent, useEffect, useState } from 'react'

import Modal from 'react-modal'

import { useTransactions } from '../../../hooks/useTransactions'

import { useTransactionModal } from '../../../hooks/useTransactionModal'

import { formatDate, formatMoney } from '../../../utils'

import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'

import {
  Container,
  ActionsContainer,
  Button,
  Field,
  FieldGroup
} from './styles'

Modal.setAppElement('#root')

export function DeleteTransactionModal() {
  const { deleteTransaction, editingTransaction } = useTransactions()
  const {
    isDeleteTransationModalOpen,
    handleCloseModal
  } = useTransactionModal()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setAmount(editingTransaction.amount)
    setTitle(editingTransaction.title)
    setType(editingTransaction.type)
    setCategory(editingTransaction.category)
    setDate(editingTransaction.created_at)
  }, [editingTransaction])

  function onRequestClose() {
    handleCloseModal('deleteTransaction')
  }

  async function handleDeleteTransaction(event: FormEvent) {
    event.preventDefault()

    await deleteTransaction(editingTransaction.id)

    closeModal()
  }

  async function closeModal() {
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isDeleteTransationModalOpen}
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

      <Container onSubmit={handleDeleteTransaction}>
        <h2>Você quer deletar esta transação?</h2>

        <FieldGroup>
          <Field>
            <h5>Título</h5>
            <span>{title}</span>
          </Field>

          <Field>
            <h5>Valor</h5>
            <span color={type}>
              {type === 'deposit' ? (
                <img src={incomeImg} alt="Seta vermelha para baixo" />
              ) : (
                <img src={outcomeImg} alt="Seta verde para cima" />
              )}
              {formatMoney(amount)}
            </span>
          </Field>

          <Field>
            <h5>Categoria</h5>
            <span color={type}>{category}</span>
          </Field>

          <Field>
            <h5>Data</h5>
            <span color={type}>{date && formatDate(date)}</span>
          </Field>
        </FieldGroup>

        <ActionsContainer>
          <Button color="red" type="button" onClick={closeModal}>
            Não
          </Button>

          <Button color="green" type="submit">
            Sim
          </Button>
        </ActionsContainer>
      </Container>
    </Modal>
  )
}
