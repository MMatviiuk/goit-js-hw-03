function slugify(title) {
  // Приводимо текст до нижнього регістру, розділяємо слова за пробілами
  // та об'єднуємо їх у рядок через тире
  return title.toLowerCase().split(' ').join('-');
}

// Тестові виклики функції, результати яких виводяться в консоль
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
