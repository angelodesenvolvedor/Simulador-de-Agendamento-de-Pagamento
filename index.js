const readline = require('readline-sync');

let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Informações do usuário
nomeBeneficiario = readline.question('Informe o nome do beneficiário: ');
valorConta = parseFloat(readline.question('Informe o valor da conta a ser paga (em reais, sem casas decimais): '));
dataVencimento = readline.question('Informe a data de vencimento (DD/MM/AAAA): ');

// Exibindo a mensagem de confirmação
const mensagemConfirmacao = `Pagamento Agendado! Valor: R$ ${valorConta.toFixed(2)}, vencimento ${dataVencimento}.`;

// Imprimindo....
console.log(mensagemConfirmacao);
