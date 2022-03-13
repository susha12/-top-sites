function gio (){
    let cardName = document.querySelectorAll("h3");
    let cardImg = document.querySelectorAll(".inner-skew img");
    let cardLink = document.querySelectorAll(".a-box a");
    let imgBackground = document.querySelectorAll(".inner-skew");
    let card = document.querySelectorAll(".text-container");
    let cardText = document.querySelectorAll(".text-container div");
    let i;


    for (i = 0; i < cardName.length; i++) {
      cardName[i].innerHTML = baseHumor[i]['name'];
      cardImg[i].src = baseHumor[i]['img']; 
      cardLink[i].href = baseHumor[i]['link'];
      imgBackground[i].style.background = colorsOne[i];
      card[i].style.background = colorsTwo[i];
      cardText[i].innerHTML = baseHumor[i]['text'];
      console.log
    }
  }
gio ();

let body = document.querySelector("body");
let day = document.querySelector(".day");
let night = document.querySelector(".night");
let boxDay = document.querySelector(".box_day_night");
let menu = document.querySelector(".menu");


// изменение цветов на саитье 
night.onclick = ()=>{
  body.classList.add("root");
  night.style.display = 'none';
  day.style.display = 'flex';
  boxDay.style.background = 'white';
  menu.style.background = 'white';
}
day.onclick = ()=>{
  body.classList.remove("root");
  day.style.display = 'none';
  night.style.display = 'flex';
}

// появление менью
  let nav = document.querySelector(".nav_bar")
  menu.onclick =()=>{
    nav.classList.toggle("active");
  }
//  кнопка на верх
document.addEventListener('DOMContentLoaded', () => {

  let toTopBtn = document.querySelector('.triangle-top');

  window.onscroll = function () {
      if (window.pageYOffset > 480) {
          toTopBtn.style.display = 'block'
      } else {
          toTopBtn.style.display = 'none'
      }
  }
  // плавный скролл наверх 
  // toTopBtn.addEventListener('click', function () {
  //     window.scrollBy({
  //         top: -document.documentElement.scrollHeight,
  //         behavior: 'smooth'
  //     });
  // });
  let scrolled;
  let timer;
  toTopBtn.onclick =()=> {
    scrolled = window.pageYOffset;
    scrollToTop();
  }
  function scrollToTop(){
   if (scrolled > 0){
     window.scrollTo(0,scrolled);
     console.log(scrolled);
     scrolled = scrolled - 10;
     timer = setTimeout(scrollToTop, 10);
   }
   else{
     clearTimeout(timer);
     window.scrollTo(0, 0);
   }
  }
});


