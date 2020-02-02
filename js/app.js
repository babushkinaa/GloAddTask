let week = ['вс','пн','вт','ср','чт','пт','сб'];
let date = new Date();


for (let i = 0; i < week.length; i++) {
    const element = week[i];

    if (i === date.getDay()) {
        document.write(element.bold()+'</br>')
    } else if(i === 0 || i === 6 ){
        document.write(element.italics() +'</br>');
    }else {
        document.write(element+'</br>');
    }
   
    
    
}






