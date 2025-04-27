const scrollBtn = document.getElementById("scroll-btn")
const mobileMenu = document.getElementById("mobile-menu")


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleMenu = () => {
    mobileMenu.style.display = "block"
  }
  const handleMenuClose = () => {
    mobileMenu.style.display = "none"
  }
  