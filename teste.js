const receitas = [3000,250, 300,400]
const despesas = [200, 120, 50,250];

function somar(array){
    let total = 0;
    for(let i =0 ; i < array.length ; i++){
        total += array[i]
    }

   return total
}

let saldo = somar(receitas) - somar(despesas) ;

if (saldo < 0){
    console.log(`Seu saldo de ${saldo} é Negativco`)
}else{
    console.log(`Seu saldo de ${saldo} é positivo`)
}
