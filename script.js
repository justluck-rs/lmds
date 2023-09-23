
const words = ["Sofisticadas", "Inovadoras", "Tecnológicas"];
const wordElement = document.getElementById('words');
let currentIndex = 0;
let currentWordIndex = 0;

function typeWriter() {
  const currentWord = words[currentWordIndex];
  const currentText = currentWord.slice(0, wordElement.textContent.length + 1);

  wordElement.textContent = currentText;

  if (currentText === currentWord) {
    setTimeout(eraseText, 1000);
  } else {
    setTimeout(typeWriter, 50);
  }
}

function eraseText() {
  const currentText = wordElement.textContent;

  if (currentText.length > 0) {
    const newText = currentText.slice(0, -1);
    wordElement.textContent = newText;
    setTimeout(eraseText, 50);
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeWriter, 1000);
  }
}

typeWriter();



const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const targetNav = document.querySelector('[data-shadow]')
const shadowClass = 'border';

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
    const windowTopScroll = window.pageYOffset + ((window.innerHeight * 3) / 1);
    console.log(targetNav)
    // if((windowTopScroll) > ){

    // }
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }

  animeScroll();

  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

  // Menu

  const menuDropdown = document.getElementById('item-dropdown')
  const dropdown = document.getElementById('menu-dropdown')
  function openMenu() {
    if(!dropdown.classList.contains('hidden')){
      dropdown.classList.add('hidden');
    }else{
      dropdown.classList.remove('hidden');
    }
  }


  menuDropdown.addEventListener('click', function(e){
    e.target.preventDefault;
    openMenu();
  })
