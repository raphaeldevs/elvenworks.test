import { useTransactionModal } from '../../hooks/useTransactionModal'

import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const { handleOpenModal } = useTransactionModal()
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="leaft money" />

        <button type="button" onClick={() => handleOpenModal('newTransaction')}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
