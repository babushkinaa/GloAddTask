
const input = document.querySelector('.input'),
        output = document.querySelector('.output');
        

let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';



input.addEventListener('change', () => {
    const value = input.value,
    key = 'trnsl.1.1.20200302T195926Z.c0ebe76fb9a3acfa.e672ceee7f14bca10846e01acd803d036bf65c4b',
    translate = 'ru-en';
      fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'key='+key+'&lang='+translate+'&text='+value
        // body:`key=${key}&lang=${translate}&text=${txt}`
      })
      .then((response) => {
                    if (response.status !== 200 ){
                        throw new Error(response);
                    }  
                    return (response.json());      
        })
        .then((response) =>{
            output.innerHTML = response.text[0];
        })
        .catch(error => output.innerHTML = error);
    });


