export const { format: formatMoney } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date))
