// Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//     через if, 
//     через switch-case 
//     через многомерный массив без ифов и switch.
// У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
// 	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
// Запушить проект в репозиторий для усложненных заданий на GitHub


let lang = 'en';
// let lang = 'ru';

// namePerson = 'Артем'; //директор
// namePerson = 'Максим'; // пеподаватель
namePerson = 'Алексей'; // студент

consoleNamePerson = (namePerson === 'Артем') ? console.log('директор') : 
(namePerson === 'Максим') ? console.log('преподаватель'):
(namePerson !== 'Артем' && namePerson !== 'Максим') ? console.log('студент'):null;


let weekday = [
    ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
];

{
    console.log( '\nВыводим при помощи  тернарного оператора\n\n');
    let consoleWekday = (lang === 'ru') ?  weekday[0] : (lang ==='en') ? weekday[1]: '';
    for (let index = 0; index < consoleWekday.length; index++) {
        console.log(consoleWekday[index]);
        
    }
}
{
    console.log( '\nВыводим при помощи конструкции switch\n\n');
switch(lang){
    case ('ru'):
        for (let index = 0; index < weekday[0].length; index++) {
            console.log(weekday[0][index]);
        }
        break;
    case ('en'):
        for (let index = 0; index < weekday[0].length; index++) {
            console.log(weekday[1][index]);
        };
        break;
}
}
{
console.log( '\nВыводим при помощи конструкции if\n\n');

if (lang === 'ru') {
    for (let index = 0; index < weekday[0].length; index++) {
        console.log(weekday[0][index]);
    }
} else if (lang === 'en') {
    for (let index = 0; index < weekday[1].length; index++) {
        console.log(weekday[1][index]);
    }
}
}