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

  