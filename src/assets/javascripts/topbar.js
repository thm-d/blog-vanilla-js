const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMenuOpen = false;
let mobileMenuDOM;

// Fermeture du menu
const closeMenu = () => {
  mobileMenuDOM.classList.remove("open");
};

// Création du DOM menu
const createMobileMenu = () => {
  mobileMenuDOM = document.createElement("div");
  mobileMenuDOM.classList.add("mobile-menu");
  mobileMenuDOM.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  mobileMenuDOM.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMenuDOM);
};

// Ouverture menu et création menu DOM s'il n'éxiste pas
const openMenu = () => {
  if (mobileMenuDOM) {
  } else {
    createMobileMenu();
  }
  mobileMenuDOM.classList.add("open");
};

// Affiche ou non le menu
const toggleMobileMenu = (event) => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};

iconMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileMenu();
});

window.addEventListener("click", () => {
  if (isMenuOpen) {
    toggleMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480 && isMenuOpen) {
    toggleMobileMenu();
  }
});
