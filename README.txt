# Desafio Loja Integrada: Automação de Testes

Este repositório contém a automação de testes para o desafio proposto, cobrindo cenários críticos da funcionalidade de Carrinho de Compras com a nova feature de Cupons de Desconto.

---

## 📋 Cenários Automatizados

1. **Validação de Cupom Inválido**  
   - Garante que o sistema exibe uma mensagem de erro ao aplicar um cupom inválido.

2. **Validação de Cupom de Frete Grátis**  
   - Verifica se o cupom `FRETEGRATIS` é aplicado corretamente, habilitando a opção de frete grátis no carrinho.

---

## 🚀 Como Executar os Testes

### Pré-requisitos:
1. Node.js instalado (versão 16 ou superior).
2. Git configurado em sua máquina.
3. Dependências do Cypress instaladas.

### Passo a passo:

1. Clone este repositório:
   git clone https://github.com/tarik-dimitri/desafio-loja-integrada.git

2. Acesse a pasta:
   cd desafio-loja-integrada

3. Instale as dependências:
   npm install


4. Execute os testes no navegador:
   npx cypress open


5. Ou em modo headless:
   npx cypress run

---

## 📁 Estrutura de Pastas

cypress/
├── e2e/
│   ├── cupom_invalido.cy.js   # Teste para validar mensagem de erro ao aplicar cupom inválido.
│   ├── frete_gratis.cy.js     # Teste para validar a aplicação do cupom de frete grátis.
├── support/
│   ├── commands.js            # Comandos customizados para login e aplicação de cupons.
│   ├── selectors.js           # Centraliza os seletores usados nos testes.
├── fixtures/                  # Reservado para arquivos de dados de teste (não utilizado atualmente).
cypress.config.js              # Configurações do Cypress, incluindo base URL e variáveis de ambiente.

---

## 🛠️ Configuração de Variáveis de Ambiente

As credenciais de login estão configuradas no arquivo `cypress.config.js` para simplificar o acesso:

env: {
  CYPRESS_USERNAME: "tarik.feitosa@gmail.com",
  CYPRESS_PASSWORD: "senha@123"
}

Se necessário, atualize os valores diretamente no arquivo cypress.config.js

---

## 📋 Dependências

As dependências do projeto são gerenciadas pelo NPM. Principais bibliotecas utilizadas:

- **Cypress (v13.16.0)**: Framework de testes end-to-end.

Para instalar todas as dependências, execute:

npm install


---

## 🧪 Exemplos de Execução

- **Teste de Cupom Inválido**
  - Certifica que um cupom inválido exibe a mensagem de erro correta.

- **Teste de Frete Grátis**
  - Garante que o cupom `FRETEGRATIS` habilita a opção de frete grátis.

---

## 📧 Contato

Criado por Tarik Dimitri. Entre em contato para dúvidas ou melhorias:

- **Email**: tarik.feitosa@gmail.com  
- **GitHub**: [Tarik Dimitri](https://github.com/tarik-dimitri)

--- 

Desfrute da automação! 🚀
