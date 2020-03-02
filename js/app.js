document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
      fetch('./cars.json')
        .then((response) => {
            if (response.status !== 200 ){
                throw error;
            }      
            return (response.json());      
        })
        .then(response => {
            response.cars.forEach(item => {
                if (item.brand === select.value) {
                    const {brand, model, price} = item;
                    output.innerHTML = `Тачка ${brand} ${model} <br>
                    Цена: ${price}$`;
                }
            });
        })
        .catch(error => console.error(error));
    });

});

