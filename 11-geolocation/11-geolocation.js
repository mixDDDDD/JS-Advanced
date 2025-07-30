'use strict';

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation API не поддерживается этим браузером'));
    } else {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    }
  });
}

getUserLocation()
  .then(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const output = document.createElement('div');
    output.textContent = `Ваши координаты: широта ${latitude}, долгота ${longitude}`;
    document.body.appendChild(output);
  })
  .catch(error => {
    const output = document.createElement('div');
    output.textContent = `Ошибка получения геопозиции: ${error.message}`;
    document.body.appendChild(output);
  });
