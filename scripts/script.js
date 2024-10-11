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
const toggleThemeButton2 = document.getElementById('toggleTheme2'); // For responsive navbar
const body = document.body;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const sunIcon2 = document.getElementById('sunIcon2'); // For responsive navbar
const moonIcon2 = document.getElementById('moonIcon2'); // For responsive navbar

// Function to update the theme and icons
function updateTheme(theme) {
    body.classList.remove('light-mode', 'dark-mode'); // Remove both classes
    if (theme === 'light') {
        body.classList.add('light-mode');
        sunIcon.style.display = 'none'; // Hide sun icon
        moonIcon.style.display = 'inline'; // Show moon icon
        sunIcon2.style.display = 'none'; // Hide sun icon (responsive)
        moonIcon2.style.display = 'inline'; // Show moon icon (responsive)
    } else {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'inline'; // Show sun icon
        moonIcon.style.display = 'none'; // Hide moon icon
        sunIcon2.style.display = 'inline'; // Show sun icon (responsive)
        moonIcon2.style.display = 'none'; // Hide moon icon (responsive)
    }
    localStorage.setItem('theme', theme); // Save the current theme
}

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme if not found
updateTheme(savedTheme);

// Event listener for the theme toggle buttons
toggleThemeButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    updateTheme(currentTheme); // Update theme based on current theme
});

toggleThemeButton2.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    updateTheme(currentTheme); // Update theme based on current theme
});


  

const text1 = "Aslamov Muhammadjon";
const text2 = "a Front-End Developer";
const text3 = "a Student"
const textElement = document.getElementById("text");
let index1 = 0;
let index2 = 0;
let index3 = 0;

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

// Функция для удаления текста по одной букве
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
    }
    else {
      setTimeout(deleteText2, 500); // Пауза перед удалением текста
  }
}

function deleteText2() {
  if (index2 >= 0) {
      textElement.innerHTML = text2.substring(0, index2);
      index2--;
      setTimeout(deleteText2, 100); // Задержка между удалением букв (100 мс)
  } else {
      setTimeout(typeText3, 500); // Пауза перед началом второго текста
  }
}

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




