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
const toggleThemeButton2 = document.getElementById('toggleTheme2'); 
const body = document.body;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const sunIcon2 = document.getElementById('sunIcon2'); 
const moonIcon2 = document.getElementById('moonIcon2');

function updateTheme(theme) {
    body.classList.remove('light-mode', 'dark-mode'); 
    if (theme === 'light') {
        body.classList.add('light-mode');
        sunIcon.style.display = 'none'; 
        moonIcon.style.display = 'inline'; 
        sunIcon2.style.display = 'none';
        moonIcon2.style.display = 'inline'; 
    } else {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none'; 
        sunIcon2.style.display = 'inline'; 
        moonIcon2.style.display = 'none'; 
    }
    localStorage.setItem('theme', theme); 
}

const savedTheme = localStorage.getItem('theme') || 'dark'; 
updateTheme(savedTheme);

toggleThemeButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    updateTheme(currentTheme); 
});

toggleThemeButton2.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    updateTheme(currentTheme); 
});


  

const text1 = "Aslamov Muhammadjon";
const text2 = "a Front-End Developer";
const text3 = "a Student"
const textElement = document.getElementById("text");
let index1 = 0;
let index2 = 0;
let index3 = 0;

function typeText1() {
    if (index1 < text1.length) {
        textElement.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeText1, 100); 
    } else {
        setTimeout(deleteText1, 500); 
    }
}

function deleteText1() {
    if (index1 >= 0) {
        textElement.innerHTML = text1.substring(0, index1);
        index1--;
        setTimeout(deleteText1, 100); 
    } else {
        setTimeout(typeText2, 500); 
    }
}

function typeText2() {
    if (index2 < text2.length) {
        textElement.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeText2, 100); 
    }
    else {
      setTimeout(deleteText2, 500); 
  }
}

function deleteText2() {
  if (index2 >= 0) {
      textElement.innerHTML = text2.substring(0, index2);
      index2--;
      setTimeout(deleteText2, 100); 
  } else {
      setTimeout(typeText3, 500); 
  }
}

function typeText3() {
  if (index3 < text3.length) {
      textElement.innerHTML += text3.charAt(index3);
      index3++;
      setTimeout(typeText3, 100);
  } else {
      setTimeout(deleteText3, 500); 
  }
}

function deleteText3() {
  if (index3 >= 0) {
      textElement.innerHTML = text3.substring(0, index3);
      index3--;
      setTimeout(deleteText3, 100); 
  } else {
      setTimeout(resetAnimation, 500); 
  }
}


function resetAnimation() {
  index1 = 0;
  index2 = 0;
  index3 = 0;
  textElement.innerHTML = "";
  setTimeout(typeText1, 500); 
}

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




