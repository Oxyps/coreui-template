type Type = { [key: string]: string };

export const ORDER_STATUS = {
  'A': 'Aberto',
  'F': 'Fechado',
  'C': 'Cancelado',
  'CM': 'Cancelados',
  'P': 'Aguardando liberação',
  'L': 'Liberado',
  'N': 'Não liberados',
  'D': 'Autorizado produzir',
  'Z': 'Em produção',
  'O': 'Produção finalizada',
  'T': 'Em testes',
  'R': 'Registrado',
  'E': 'Enviado',
  'EE': 'Erro',
  '': 'Não sincronizado',
} as Type;
