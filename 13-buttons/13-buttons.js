const buttonContainer = document.getElementById('buttonContainer');
    const counterDisplay = document.getElementById('counter');

    for (let i = 0; i < 5; i++) {
      const btn = document.createElement('button');
      btn.textContent = 'Нажми меня';
      buttonContainer.append(btn);
    }

    let count = 0;
    let lastPressedButton = null;

    buttonContainer.addEventListener('click', (event) => {
      const target = event.target;

      if (target.tagName === 'BUTTON') {
        count++;
        counterDisplay.textContent = `Количество нажатий: ${count}`;

        if (lastPressedButton && lastPressedButton !== target) {
          lastPressedButton.textContent = 'Нажми меня';
        }
        target.textContent = 'Нажата!';
        lastPressedButton = target;
      }
    });