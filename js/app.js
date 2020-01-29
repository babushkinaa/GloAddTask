let massiv = [234,543,467,876,999,321,404];

let toStr = function (params) {
    return params +'';
}
let toNum = function (params) {
    return +params;
}

 for (let index = 0; index < massiv.length; index++) {
        let number = massiv[index];
        number = toStr(number);
        if (toNum(number[0]) === 2 || toNum(number[0]) ===4) {
            if (toNum(number[0]) === 2 ) {
                console.log('Начинается на 2 выводим: ',massiv[index]);
            } else {
                console.log('Начинается на 4 выводим: ',massiv[index]);
            }
            
        }
}




//https://www.youtube.com/watch?v=MOfrwf0qwJc

let list = [];

newiteration: // ставим метку для выхода из цикла если нашли число дающее остаток 0
for (var i = 2; i <= 100; i++) {
  for (var j = 2; j < i; j++) { //прогоняем от 2 до текущего значения i
    if (i % j == 0) continue newiteration; // нашли число выходим из вложеного цикла и переходим на метку
  }
  list.push(i);
}
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    
}
