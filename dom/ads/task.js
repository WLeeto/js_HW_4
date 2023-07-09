// Получаем все элементы rotator на странице
const rotators = document.querySelectorAll('.rotator');

// Для каждого rotator на странице запускаем смену текстовых блоков
rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentCaseIndex = 0;

  // Функция для смены текстовых блоков
  const changeCase = () => {
    // Скрываем текущий текстовый блок
    cases[currentCaseIndex].classList.remove('rotator__case_active');

    // Переходим к следующему текстовому блоку
    currentCaseIndex = (currentCaseIndex + 1) % cases.length;

    // Получаем опции из data-атрибутов текущего текстового блока
    const speed = parseInt(cases[currentCaseIndex].dataset.speed);
    const color = cases[currentCaseIndex].dataset.color;

    // Применяем опции к текущему текстовому блоку
    cases[currentCaseIndex].classList.add('rotator__case_active');
    cases[currentCaseIndex].style.color = color;

    // Запускаем смену текстовых блоков с учетом заданной скорости
    setTimeout(changeCase, speed);
  };

  // Запускаем смену текстовых блоков с задержкой в 1 секунду
  setTimeout(changeCase, 1000);
});
