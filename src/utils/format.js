export const toBRLCurrency = value =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
