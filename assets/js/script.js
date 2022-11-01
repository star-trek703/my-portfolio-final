const body = document.getElementsByTagName('body');
const hero_section = document.getElementById('hero-section');
const header = document.getElementsByTagName('header');
const nav_toggle_btn = document.getElementById('nav-toggle-btn');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const menu_links = document.getElementsByClassName('menu-link');

nav_toggle_btn.addEventListener('click', () => {
  navbar.classList.toggle('-translate-y-72');
});

function closeMenu() {
  navbar.classList.add('-translate-y-72');
}

if (window.scrollY > (hero_section.clientHeight - 70)) {
  nav_toggle_btn.classList.remove('text-white');
  header[0].classList.add('shadow-lg')
  header[0].classList.add('opacity-90')
  header[0].classList.add('bg-white')
  logo.style.color = "#111";
  logo.style.textShadow = "none";

  for (let ml = 0; ml < menu_links.length; ml++) {
    if (body[0].clientWidth > 768) {
      menu_links[ml].style.color = "#111";
      menu_links[ml].style.textShadow = "none";
    } else {
      menu_links[ml].style.color = "#111";
      menu_links[ml].style.textShadow = "none";
    }
  }
} else {
  nav_toggle_btn.classList.add('text-white');
  header[0].classList.remove('shadow-lg')
  header[0].classList.remove('shadow-lg')
  header[0].classList.remove('opacity-90')
  header[0].classList.remove('bg-white')
  logo.style.color = "#fff";
  logo.style.textShadow = "5px 5px 9px #111";

  for (let ml = 0; ml < menu_links.length; ml++) {
    if (body[0].clientWidth > 768) {
      menu_links[ml].style.color = "#fff";
      menu_links[ml].style.textShadow = "5px 5px 9px #111";
    } else {
      menu_links[ml].style.color = "#111";
      menu_links[ml].style.textShadow = "none";
    }
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY > (hero_section.clientHeight - 70)) {
    nav_toggle_btn.classList.remove('text-white');
    header[0].classList.add('shadow-lg')
    header[0].classList.add('opacity-90')
    header[0].classList.add('bg-white')
    logo.style.color = "#111";
    logo.style.textShadow = "none";

    for (let ml = 0; ml < menu_links.length; ml++) {
      if (body[0].clientWidth > 768) {
        menu_links[ml].style.color = "#111";
        menu_links[ml].style.textShadow = "none";
      } else {
        menu_links[ml].style.color = "#111";
        menu_links[ml].style.textShadow = "none";
      }
    }
  } else {
    nav_toggle_btn.classList.add('text-white');
    header[0].classList.remove('shadow-lg')
    header[0].classList.remove('shadow-lg')
    header[0].classList.remove('opacity-90')
    header[0].classList.remove('bg-white')
    logo.style.color = "#fff";
    logo.style.textShadow = "5px 5px 9px #111";

    for (let ml = 0; ml < menu_links.length; ml++) {
      if (body[0].clientWidth > 768) {
        menu_links[ml].style.color = "#fff";
        menu_links[ml].style.textShadow = "5px 5px 9px #111";
      } else {
        menu_links[ml].style.color = "#111";
        menu_links[ml].style.textShadow = "none";
      }
    }
  }
});
