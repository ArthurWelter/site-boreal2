const botaoX = document.querySelectorAll('.cara-nova i');
const caraNova = document.querySelector('.cara-nova')

botaoX.forEach((botao) => {
    botao.addEventListener ('click', () => {
        caraNova.classList.add('desativa')
    })
})






AOS.init({
  duration: 1000
});


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });