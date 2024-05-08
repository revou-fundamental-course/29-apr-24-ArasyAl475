// ini javascript
// Slideshow otomatis
window.onload = function () {
  const images = [
    "assets/projek.png",
    "assets/projek1.png",
    "assets/projek2.png",
    "assets/projek3.png",
    "assets/projek4.png"
  ];

  let slideIndex = 0;

  function createProjectContainers() {
    const sliderContainer = document.querySelector(".slider-container");
    images.forEach(imageUrl => {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("project-container");
      const image = document.createElement("img");
      image.src = imageUrl;
      projectContainer.appendChild(image);
      sliderContainer.appendChild(projectContainer);
    });
  }

  function showSlide() {
    if (images.length === 0) {
      console.error("Tidak ditemukan gambar!");
      return;
    }

    const projectImages = document.querySelectorAll(".project-container img");
    if (!projectImages.length) {
      console.error("No elements found with class 'project-container img'!");
      return;
    }

    projectImages.forEach(image => image.style.display = "none");
    projectImages[slideIndex].style.display = "block";
    slideIndex = (slideIndex + 1) % images.length;
  }

  createProjectContainers();
  showSlide();
  setInterval(showSlide, 3000);
};

//Validasi JS pada Form
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    if (name === '' || email === '' || subject === '') {
      document.getElementById('name').classList.add('error');
      document.getElementById('email').classList.add('error');
      document.getElementById('subject').classList.add('error');
      alert('Mohon lengkapi form');
    } else {
      document.getElementById('name').classList.remove('error');
      document.getElementById('email').classList.remove('error');
      document.getElementById('subject').classList.remove('error');
      alert('Request telah terkirim, terima kasih karena memilih Als');
      setTimeout(function() {
        document.getElementById('contact-form').reset();
      }, 5000);
    }
  });

// Scroll otomatis
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});