import { createContext, ReactNode, useContext, useState } from 'react'

import { EditTransactionModal } from '../components/Modal/EditTransaction'
import { NewTransactionModal } from '../components/Modal/NewTransaction'
import { DeleteTransactionModal } from '../components/Modal/DeleteTransaction'

interface TransactionsModalContextData {
  isNewTransationModalOpen: boolean
  isEditTransationModalOpen: boolean
  isDeleteTransationModalOpen: boolean
  handleOpenModal: (modalName: string) => void
  handleCloseModal: (modalName: string) => void
}

interface TransactionsModalProviderProps {
  children: ReactNode
}

type HandleModalFunctions = {
  [modalName: string]: () => void
}

const TransactionsModalContext = createContext(
  {} as TransactionsModalContextData
)

export function TransactionsModalProvider({
  children
}: TransactionsModalProviderProps) {
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(
    false
  )

  const [isEditTransationModalOpen, setIsEditTransationModalOpen] = useState(
    false
  )

  const [
    isDeleteTransationModalOpen,
    setIsDeleteTransationModalOpen
  ] = useState(false)

  function handleOpenModal(modalName: string) {
    const action: HandleModalFunctions = {
      editTransaction: () => setIsEditTransationModalOpen(true),
      newTransaction: () => setIsNewTransationModalOpen(true),
      deleteTransaction: () => setIsDeleteTransationModalOpen(true)
    }

    action[modalName]()
  }

  function handleCloseModal(modalName: string) {
    const action: HandleModalFunctions = {
      editTransaction: () => setIsEditTransationModalOpen(false),
      newTransaction: () => setIsNewTransationModalOpen(false),
      deleteTransaction: () => setIsDeleteTransationModalOpen(false)
    }

    action[modalName]()
  }

  const contextValue = {
    isNewTransationModalOpen,
    isEditTransationModalOpen,
    isDeleteTransationModalOpen,
    handleOpenModal,
    handleCloseModal
  }

  return (
    <TransactionsModalContext.Provider value={contextValue}>
      {children}

      <NewTransactionModal />
      <EditTransactionModal />
      <DeleteTransactionModal />
    </TransactionsModalContext.Provider>
  )
}

export function useTransactionModal() {
  const context = useContext(TransactionsModalContext)

  return context
}
