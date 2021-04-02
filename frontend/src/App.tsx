import { GlobalStyle } from './styles/global'

import { TransactionsProvider } from './hooks/useTransactions'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionsModalProvider } from './hooks/useTransactionModal'

export function App() {
  return (
    <TransactionsProvider>
      <TransactionsModalProvider>
      
        <GlobalStyle />
        <Header />
        
        <Dashboard />
      </TransactionsModalProvider>
    </TransactionsProvider>
  )
}
