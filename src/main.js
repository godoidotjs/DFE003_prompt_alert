//1- Elabore um programa que leia um numero 
//e devolva para o usuário o dobro do número informado.

//ENTRADA
const numero = prompt("DIGITE SEU NUMERO");

//PROCESSAMENTO
const duplicador = (numero*2);

//SAÍDA
alert(duplicador);


///////////////////////////////////////////////////////////////////////////////////////////////////


//2- Elabore um programa que calcule o valor do jantar, sendo o valor
//total do jantar composto pela conta junto com a taxa de atendimento 
//do garçom. 

//ENTRADA
const  valorJantar = prompt('VALOR DO JANTAR');
const converte = parseInt(valorJantar);
const taxaDoGarcom = prompt("VALOR DA TAXA");
const converteTaxa = parseInt(taxaDoGarcom);


//PROCESSAMENTO
 const porcentagem = converte * (taxaDoGarcom / 100);
 const valorTotal = (converte + porcentagem);

//SAÍDA
 alert(valorTotal);


////////////////////////////////////////////////////////////////////////////////////////////////////////


//3- Elabore um programa para uma pizzaria, o qual leia o valor total de
//uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a 
//ser pago por cliente.

//ENTRADA
const valorTotalConta = prompt('VALOR TOTAL A SER PAGO');
const coverte2 = parseInt(valorTotalConta);
const clientes = prompt('QUANTIDADE DE CLIENTES');
const converteClientes = parseInt(clientes);

//PROCESSAMENTO
const valorFinal = valorTotalConta / clientes;

//SAÍDA
alert(valorFinal);

