const writeUs = document.querySelector('.modal-write-us-wrapper');
const openWriteUs = document.querySelector('.registration');
const closeWriteUs = document.querySelector('.close-modal-write-us');
const login = document.querySelector('.name');
const buttonWriteUs = document.querySelector('.button-text-us');




const formWriteUs = document.querySelector('.modal-write-us-form');
const email = document.querySelector('[name=email]');
const message = document.querySelector('.message');
const buy = document.querySelectorAll('.button-buy');
const addInBusket = document.querySelector('.modal-basket-wrapper');
const closeAddInBusket = document.querySelector('.close-modal-basket');

const openMap = document.querySelector('.map');
const map = document.querySelector('.map-wrapper');
const closeMap = document.querySelector('.close-modal-map');


let ifStorageSupport = true;
let storageLogin = '';
let storageEmail = '';

try {
  storageLogin = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');

}  catch (err) {
    ifStorageSupport = false;
  }
if(openWriteUs) {
  openWriteUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUs.classList.add('show-modal');
  })

};




  if (storageLogin) {
    if (storageEmail) {
      login.value = storageLogin;
      email.value = storageEmail;
      message.focus();
    }
    else {
    login.value = storageLogin;
    email.focus();
    }
  }
  else {
    if (storageEmail) {
    email.value = storageEmail;
    login.focus();
    }
    else {
    login.focus();
    }
  };

buttonWriteUs.addEventListener('click', function (evt){
evt.preventDefault();
console.log('1');
writeUs.classList.add('show-modal');
});

closeWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('2');
  writeUs.classList.remove('show-modal');
  writeUs.classList.remove('error');
});

formWriteUs.addEventListener('submit', function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();

    writeUs.classList.remove('error');
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add('error');

  }
  else {
    if (ifStorageSupport) {
    localStorage.setItem('login', login.value);
    localStorage.setItem('email', email.value);
  }

  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (writeUs.classList.contains('show-modal')) {
      evt.preventDefault();
      console.log('3');
      writeUs.classList.remove('show-modal');
      writeUs.classList.remove('error');

    }
  }
})
buy.forEach((btn) =>{
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    addInBusket.classList.add('show-modal');
  });
})

if (closeAddInBusket) {
  closeAddInBusket.addEventListener('click', function (evt) {

    evt.preventDefault();
    addInBusket.classList.remove('show-modal');
  });

};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addInBusket.classList.contains("show-modal")) {
      evt.preventDefault();
      addInBusket.classList.remove("show-modal");


    }
  }
});



openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("show-modal");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("show-modal");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("show-modal")) {
      evt.preventDefault();
      map.classList.remove("show-modal");
    }
  }
});


openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("show-modal");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("show-modal");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("show-modal")) {
      evt.preventDefault();
      map.classList.remove("show-modal");
    }
  }
});
