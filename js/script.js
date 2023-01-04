// select in header

// const element = document.querySelector('.search__select');
// const choices = new Choices(element, {
//   searchEnabled: false,
//   allowHTML: true,
//   position: 'bottom',
//   shouldSort: false,

// });

// scrollbar 
document.querySelectorAll(".dropdown__simplbar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
})

const btns = document.querySelectorAll(".search__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})


// подключение кастомного селекта
const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  position: 'bottom',



});


// swiper





// $(function () {
const swiperHero = new Swiper(".swiperHero", {
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



const swiperGallery = new Swiper(".swiperGallery", {
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    //   // when window width is >= 1799px
    767: {
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1000: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1580: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiperEvents = new Swiper(".swiperEvents", {
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  breakpoints: {
    //   // when window width is >= 1799px
    630: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1000: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1360: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },

  pagination: {
    el: ".swiper-pagination-events",
  },

  navigation: {
    nextEl: ".swiper-button-next-events",
    prevEl: ".swiper-button-prev-events",
  },
});


var swiperProjects = new Swiper(".swiperProjects", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: false,
  loopFillGroupWithBlank: true,
  breakpoints: {
    //   // when window width is >= 1799px
    630: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});













// TABS


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

    // tabsItem.forEach(function (element) { element.removeAttribute('id') });
    // document.querySelector(`[data-target="${path}"]`).setAttribute("id", path);

  });
});



// tooltip

tippy('#firstTooltip', {
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('#secondTooltip', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('#thirdTooltip', {
  content: 'В стремлении повысить качество',
});









// yandex map

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.759739, 37.618540],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15
  });


  const myPlacemark = new ymaps.Placemark([55.760306, 37.614742], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/map-marker.svg',
    // Размеры метки.
    iconImageSize: [20, 20],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    // iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    // iconContentOffset: [15, 15],
    // Макет содержимого.
    // iconContentLayout: MyIconContentLayout
  });

  myMap.geoObjects.add(myPlacemark);

}



// BURGER

const burgerBtn = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header__nav');
// const navList  = document.querySelectorAll('.nav__list ')
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');


burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('lock');
})


navLinks.forEach(function (el) {
  el.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    headerNav.classList.remove('active');
    body.classList.remove('lock');
  });

});



// Input Search

const searchFormTop = document.querySelector('.search-form-top');
const btnSearch = document.querySelector('.form__btn-search');
const btnClose = document.querySelector('.form__btn-close');


btnSearch.addEventListener('click', () => {
  searchFormTop.classList.add('active');
})


btnClose.addEventListener('click', () => {
  searchFormTop.classList.remove('active');
})









// the second additional task

const mediaQuery = window.matchMedia('(max-width: 950px)')
function handleTabletChange(media) {

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      if (media.matches) {
        const path = e.currentTarget.dataset.path;
        tabsItem.forEach(function (element) { element.removeAttribute('id') });
        document.querySelector(`[data-target="${path}"]`).setAttribute("id", path);
      } else {
        tabsItem.forEach(function (element) { element.removeAttribute('id') });
      }


    });
  });

}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)






// the third additional task

var myModal = document.getElementById('myModal')





// input mask

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);








// new window.JustValidate('#contacts__form', {
//   rules: {
//     name: {
//       required: true,
//       minLength: 3,
//       maxLength: 30,
//       },
    
//     tel: {
//       required: true,
//       function: () => {
//         const phone = selector.inputmask.unmaskedvalue(); 
//         return Number(phone) && phone.length === 10;
//       }
//     }
//   },
//   messages: {
//     name: {
//       required: 'Пожалуйста введите имя',
//       minLength: 'Минимум 3 буквы',
//       maxLength: 'Максимум 30 букв',

//     },
//     tel: {
//       required: 'Пожалуйста введите номер',
//       function: 'Введите не менее 10 цифр'
//     }
//   },
//   submitHandler: function (thisForm) {
//     let formData = new FormData(thisForm);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 2000) {
//           console.log('Отправлено');
//         }
//         else {
//           console.log('что-то пошло не так')
//         }
//       }
//     }

//     xhr.open('POST', 'send.php', true);
//     xhr.send(formData);

//     thisForm.reset();
//   }
// })




const validate  = new window.JustValidate('#contacts__form');
const validation = new JustValidate('#contacts__form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 буквы',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 букв',
    },
    {
      rule: 'required',
      errorMessage: 'Пожалуйста введите имя',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Пожалуйста введите номер',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = selector.inputmask.unmaskedvalue(); 
        return phone.length === 10;
      },
      errorMessage: 'Введите не менее 10 цифр',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted')
    console.log(event);

    let formData = new FormData(event.target);

    console.log(...formData);
     
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    console.log(xhr)
    console.log(event.target)
    console.log(event.target.reset())

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();


  });
