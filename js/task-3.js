function filterArray(numbers, value) {
  // Ініціалізуємо порожній масив для збереження результатів фільтрації
  const filteredNumbers = [];

  // Проходимо по кожному числу в масиві
  for (let i = 0; i < numbers.length; i++) {
    // Якщо поточне число більше за value, додаємо його до результату
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Повертаємо новий масив з відфільтрованими числами
  return filteredNumbers;
}

// Тестові виклики функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
