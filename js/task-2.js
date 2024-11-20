function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви за допомогою методу concat
  const combinedArray = firstArray.concat(secondArray);

  // Перевіряємо, чи перевищує довжина нового масиву maxLength
  return combinedArray.length > maxLength
    ? combinedArray.slice(0, maxLength) // Обрізаємо до maxLength елементів
    : combinedArray; // Повертаємо весь масив, якщо довжина не перевищує maxLength
}

// Перевірка роботи функції
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
