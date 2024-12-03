export const SELECTORS = {
  login: {
    email: '#id_email', // Seletor do campo de e-mail na página de login
    password: '#id_senha', // Seletor do campo de senha
    submitButton: '.controls > .botao', // Seletor do botão de login
  },
  product: {
    firstProductButton: ':nth-child(1) > .listagem-item > .acoes-produto > .botao', // Botão para adicionar o primeiro produto ao carrinho
  },
  cart: {
    discountField: '#usarCupom', // Campo para inserir o cupom de desconto
    applyCouponButton: 'button:contains("Usar cupom")', // Botão para aplicar o cupom
    errorMessage: '.text-error', // Mensagem de erro exibida para cupons inválidos
    freeShippingOption: ':nth-child(2) > input[type="radio"]', // Radio button da opção de frete grátis
    freeShippingText: '1 dia útil R$ 0,00 Frete Grátis', // Texto indicando frete grátis
  },
};
