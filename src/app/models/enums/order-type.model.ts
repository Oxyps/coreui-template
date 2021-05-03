type Type = { [key: string]: string };

export const ORDER_TYPE = {
  'P': 'PEDIDO VENDA',
  'C': 'PEDIDO COMPRA',
  'D': 'DEVOLUÇÃO',
  'O': 'ORÇAMENTO',
  'VP': 'VENDA PERDIDA',
  'V': 'NÃO USA (VEIO DO DELPHI)',
} as Type;
