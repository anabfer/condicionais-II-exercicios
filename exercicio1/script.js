//Crie um código que receba um número por prompt e verifique se esse número é divisível por 2 ou por 3.
//Faça isso:
//a) Utilizando ifs aninhados

const numero = Number(prompt('Digite um número:'))

if(numero % 2 === 0){
    console.log('Esse número é divisível por 2')
    if(numero % 3 ===0){
        console.log('Esse número é divisível por 3')
    }else{
        console.log('Não é divisível por 3')
    }
}else {
    console.log('Esse número não é divisível por 2')
}

//b) Utilizando um operador lógico para unir duas operações relacionais

if(numero % 2 === 0 || numero % 3 === 0){
  console.log('O número é divisível por 2')
  console.log('O número é divisível por 3')
}

