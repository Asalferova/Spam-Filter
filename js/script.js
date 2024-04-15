'use strict';

// Получаем элементы DOM, которые будут использоваться в коде.
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Создаем регулярные выражения для определения спама.
const helpRegex = /помогите|помощь/i;
const dollarRegex = /[0-9]* (?:тысяч|миллионов|миллиардов)?\s*рублей/i;
const freeRegex = /(?:^|\s)бесплатно(?:$|\s)/i;
const stockRegex = /(?:^|\s)[с]кидк[а][а-я]*\s*внимание(?:$|\s)/i;
const dearRegex = /(?:^|\s)дорогой друг(?:$|\s)/i;

// Список регулярных выражений, которые будут использоваться для проверки на спам.
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Функция, которая проверяет, является ли сообщение спамом.
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Добавляем обработчик событий к кнопке, который проверяет, является ли введенное сообщение спамом.
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Пожалуйста, введите сообщение.");
    return;
  }
  result.textContent = isSpam(messageInput.value)
    ? "О нет! Это похоже на спам."
    : "Это сообщение не содержит спама.";
});


// Эта программа - это простой спам-фильтр, написанный на JavaScript. Он проверяет введенное пользователем сообщение на наличие определенных фраз или слов, которые могут указывать на спам. Вот как он работает:

// Программа получает доступ к элементам HTML: поле для ввода сообщения, кнопку для проверки сообщения и место для вывода результата.
// Затем она определяет ряд регулярных выражений, которые соответствуют фразам или словам, часто встречающимся в спаме. Эти фразы включают:
// “помогите” или “помощь”
// любое количество цифр, за которыми следует “тысяч”, “миллионов” или “миллиардов” рублей
// слово “бесплатно”
// фразы, начинающиеся на “скидка” и заканчивающиеся на “внимание”
// фраза “дорогой друг”
// Функция isSpam проверяет, содержит ли сообщение хотя бы одно из этих выражений.
// Когда пользователь нажимает кнопку для проверки сообщения, программа сначала проверяет, не пусто ли поле ввода. Если это так, то выводится предупреждение.
// Если поле ввода не пусто, программа проверяет, является ли сообщение спамом, и выводит соответствующий результат.
// После проверки содержимое поля ввода очищается.
// Это простой, но эффективный способ фильтрации спама. Однако стоит отметить, что он может давать ложные срабатывания, если нормальное сообщение случайно содержит одно из этих выражений.