'use strict';

function race(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}

const promise1 = Promise.resolve('Первый промис выполнен');
const promise2 = Promise.reject('Второй промис с ошибкой');
const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve('Третий промис выполнен'), 0);
});

race([promise1, promise2, promise3])
  .then(result => console.log('Resolved:', result))
  .catch(error => console.error('Rejected:', error));
