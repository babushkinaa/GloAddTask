
function num2str(n, text_forms) {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}



// function toAddNull(num){
//     let sep;
//     let tmpnum = num;

//     for (let index = 0; index < num.length; index++) {
//         const element = num[index];
//         (element === ':')? sep = ':' : (element === '.')? sep ='.':null;
        
//     }
   
//     res = num.split(/\:|\.|\-/);
//     let numres ='';
//     for (let index = 0; index < res.length; index++) {
//         const element = 1*res[index];

//         if(index !== res.length || res[index] < 10){
            
//                 numres += '0'+ res[index]+sep;
            
//         }else {
//             numres += res[index];
//         }

//     }
    
//     return numres.slice(0,-1);
// }
// toAddNull('9:5:3');
// console.log('toAddNull: ', toAddNull('9:5:3'));
// toAddNull('1.6.2019');
// console.log('toAddNull: ', toAddNull('1.6.2019'));

// простая функция
function addNull(nummer){
    (nummer<10) ? nummer = '0'+nummer:'';
    return nummer;
}

let datevar = new Date(),
    hour = datevar.getHours() + ' '+num2str(datevar.getHours,['час', 'часа', 'часов']),
    minute = datevar.getMinutes() + ' '+num2str(datevar.getMinutes,['минут', 'минуты', 'минут']),
    second = datevar.getSeconds()+ ' '+num2str(datevar.getSeconds,['секунд', 'секунды', 'секунд']),
    day = datevar.getDate(),
    month = datevar.getMonth()+1,
    year = datevar.getFullYear();

    console.log('day: ', day,month,year);

let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
//   timezone: 'UTC',

};
let time = function(){
    datevar = new Date();
    return addNull(datevar.getHours())+':'+addNull(datevar.getMinutes())+':'+addNull(datevar.getSeconds());
}

let datez = function(){
    datevar = new Date();
    return addNull(day)+'.'+addNull(month)+'.'+addNull(year);
}
console.log(datevar.hour);


showMonitor = () => {
    day = datevar.getDate(),
    month = datevar.getMonth()+1,
    year = datevar.getFullYear();
    document.write( datevar.toLocaleString("ru", options) + ' '+ hour +' '+minute+' '+second+'<br>'); 
    document.write( time()+ '-' + datez()); 
};
showMonitor();
// document.write( datevar.toLocaleString("ru", options) + ' '+ hour +' '+minute+' '+second+'<br>'); 
// document.write( time()+ '-' + datez()); 

let clock = document.querySelector('.clock');
console.dir(clock);
let i =1;
// clock.setAttribute('value',datez()+ '-' + time());
function showDateTime(){
        
        clock.value = datez()+ '-' + time();
        // clock.getAttribute('value');
        // console.log('clock: ', clock.getAttribute('value'));
    
}

window.setInterval(function(){
    showDateTime();
},1000);

