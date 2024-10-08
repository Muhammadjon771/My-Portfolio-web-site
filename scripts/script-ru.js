const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", () => {
  window.pageYOffset > 100
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

const html = document.querySelector("html");

const responsiveNavbar = document.querySelector(".responsive__navbar");

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const responsiveToggle = document.querySelector(".toggle");

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () =>
    responsiveNavbar.classList.remove("show")
  )
);

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});

const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;
const sunIcon = document.getElementById('moonIcon');
const moonIcon = document.getElementById('sunIcon');

// Изначально проверяем, есть ли сохраненный режим в localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    sunIcon.style.display = 'none'; // Прячем иконку солнца
    moonIcon.style.display = 'inline'; // Показываем иконку луны
} else {
    body.classList.add('dark-mode');
    sunIcon.style.display = 'inline'; // Показываем иконку солнца
    moonIcon.style.display = 'none'; // Прячем иконку луны
}

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Переключаем отображение иконок
    if (body.classList.contains('light-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        localStorage.setItem('theme', 'light');
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark');
    }
});






const text1 = "Асламов Мухаммаджон";
const text2 = "Front-End Разработчик";
const text3 = "Студент";
const textElement = document.getElementById("text");

let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

// Функция для печати первого текста
function typeText1() {
    if (index1 < text1.length) {
        textElement.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeText1, 100); // Задержка между буквами (100 мс)
    } else {
        setTimeout(deleteText1, 500); // Пауза перед удалением текста
    }
}

// Функция для удаления первого текста
function deleteText1() {
    if (index1 >= 0) {
        textElement.innerHTML = text1.substring(0, index1);
        index1--;
        setTimeout(deleteText1, 100); // Задержка между удалением букв (100 мс)
    } else {
        setTimeout(typeText2, 500); // Пауза перед началом второго текста
    }
}

// Функция для печати второго текста
function typeText2() {
    if (index2 < text2.length) {
        textElement.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeText2, 100); // Задержка между буквами (100 мс)
    } else {
        setTimeout(deleteText2, 500); // Пауза перед удалением текста
    }
}

// Функция для удаления второго текста
function deleteText2() {
    if (index2 >= 0) {
        textElement.innerHTML = text2.substring(0, index2);
        index2--;
        setTimeout(deleteText2, 100); // Задержка между удалением букв (100 мс)
    } else {
        setTimeout(typeText3, 500); // Пауза перед началом третьего текста
    }
}

// Функция для печати третьего текста
function typeText3() {
    if (index3 < text3.length) {
        textElement.innerHTML += text3.charAt(index3);
        index3++;
        setTimeout(typeText3, 100); // Задержка между буквами (100 мс)
    } else {
        setTimeout(deleteText3, 500); // Пауза перед удалением текста
    }
}

// Функция для удаления третьего текста
function deleteText3() {
    if (index3 >= 0) {
        textElement.innerHTML = text3.substring(0, index3);
        index3--;
        setTimeout(deleteText3, 100); // Задержка между удалением букв (100 мс)
    } else {
        setTimeout(resetAnimation, 500); // Пауза перед началом четвёртого текста
    }
}

// Функция для печати четвёртого текста

// Перезапуск анимации
function resetAnimation() {
    index1 = 0;
    index2 = 0;
    index3 = 0;
    textElement.innerHTML = "";
    setTimeout(typeText1, 500); // Снова запускаем анимацию
}

// Запуск анимации
typeText1();







document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
  
  
    document.addEventListener("mousemove", function(e) {
  
        const cursorX = e.clientX - cursor.offsetWidth / 2;
        const cursorY = e.clientY - cursor.offsetHeight / 2;
  
  
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
  
        const hue = Math.round((e.clientX / window.innerWidth) * 360);
  
        cursor.style.backgroundColor = "#00f9ff";
    })
  })