const writeUs = document.querySelector('.modal-write-us-wrapper');
const openWriteUs = writeUs.querySelector('[name=registration]');
const closeWriteUs = writeUs.querySelector('.close-modal-write-us');
const login = writeUs.querySelector('[name=name]');
const formWriteUs = writeUs.querySelector('.modal-write-us-form');
const email = writeUs.querySelector('[name=email]');
const message = writeUs.querySelector('.message');
const buy = document.querySelector('.button-buy');
const addInBusket = document.querySelector('.modal-basket-wrapper');
const closeAddInBusket = addInBusket.querySelector('.close-modal-basket');

const openMap = document.querySelector('.map');
const map = addInBusket.querySelector('.map-wrapper');
const closeMap = addInBusket.querySelector('.close-modal-map');


let ifStorageSupport = true;
let storageLogin = '';
let storageEmail = '';

try {
  storageLogin = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');

}  catch (err) {
    ifStorageSupport = false;
  }

openWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUs.classList.add('show-modal');


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
  }
});

closeWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUs.classList.remove('show-modal');
  writeUs.classList.remove('error');
});

formWriteUs.addEventListener('submit', function (evt) {
  if (!login.value || !email.value) {
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
  if (evt.key === 27) {
    if (writeUs.classList.contains('show-modal')) {
      evt.preventDefault();
      writeUs.classList.remove('show-modal');
      writeUs.classList.remove('error');
    }
  }
})
/восхитительно, но не работает/

buy.addEventListener('click, function (evt) {
  evt.preventDefault();
  addInBusket.classList.add('show-modal');
});

closeAddInBusket.addEventListener('click', function (evt) {
  evt.preventDefault();
  addInBusket.classList.remove('show-modal');
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buy.classList.contains("show-modal")) {
      evt.preventDefault();
      buy.classList.remove("show-modal");
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
