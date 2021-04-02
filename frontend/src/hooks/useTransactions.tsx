import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { api } from '../services/api'

export interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  created_at: Date
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  editingTransaction: Transaction
  createTransaction: (newTransactionData: TransactionInput) => Promise<void>
  editTransaction: (
    id: string,
    updatedTransaction: TransactionInput
  ) => Promise<void>
  deleteTransaction: (id: string) => Promise<void>
  setCurrentEditingTransaction: (id: string) => void
}

const TransactionsContext = createContext({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [editingTransaction, setEditingTransaction] = useState<Transaction>(
    {} as Transaction
  )

  useEffect(() => {
    api.get<Transaction[]>('transactions').then(response => {
      const transactions = response.data.map(transaction => ({
        ...transaction,
        amount: Number(transaction.amount),
        created_at: new Date(transaction.created_at)
      }))

      setTransactions(transactions)
    })
  }, [])

  async function createTransaction(newTransactionData: TransactionInput) {
    const response = await api.post<Transaction>(
      'transactions',
      newTransactionData
    )

    const newTransaction = {
      ...response.data,
      amount: Number(response.data.amount),
      created_at: new Date()
    }

    setTransactions([...transactions, newTransaction])
  }

  async function editTransaction(
    id: string,
    updatedTransaction: TransactionInput
  ) {
    await api.put(`transactions/${id}`, updatedTransaction)

    const updatedTransactions = transactions.map(transaction => {
      return transaction.id === id
        ? { ...transaction, ...updatedTransaction }
        : transaction
    })

    setTransactions(updatedTransactions)
  }

  async function deleteTransaction(id: string) {
    await api.delete<Transaction>(`transactions/${id}`)

    const updatedTransactions = transactions.filter(
      transaction => transaction.id !== id
    )

    setTransactions(updatedTransactions)
  }

  function setCurrentEditingTransaction(id: string) {
    const editingTransaction =
      transactions.find(transaction => transaction.id === id) ??
      ({} as Transaction)

    setEditingTransaction(editingTransaction)
  }

  const contextValue = {
    transactions,
    createTransaction,
    editTransaction,
    deleteTransaction,
    editingTransaction,
    setCurrentEditingTransaction
  }

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
