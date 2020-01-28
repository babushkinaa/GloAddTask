// let paramses = +prompt('Введите значение: ');
let paramses = ' Введите значение ghjgjgjgjgjhgasdjgsjgjahdgsjhgjasgjasgdjsag:лодлрыфавлрвыалоравлорлфыоаврлфыварлфоывралоыфвраловыфралофывралвыфрлфыавр ';

 function sheckParamses(params) {
     let tmpParamses = params;
     if (typeof tmpParamses != 'string'){
         alert(' Вы ввели не строку !!! ')
     } else {
        tmpParamses = tmpParamses.trim(tmpParamses);
        if (tmpParamses.length > 30 ) {
            tmpParamses = tmpParamses.substring(0,29)+'...';
        }
        return tmpParamses;
     }         
 }

 console.log( sheckParamses(paramses) );