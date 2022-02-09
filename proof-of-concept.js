// Informaction panel (phone number and pickup code)
const phoneNumber = document.querySelector('#phoneNumber');
const pickupCode = document.querySelector('#pickup');

const btn = document.querySelector('.btn');

let btn1 = false;
let btn2 = false;

const conToNum = (x) => (typeof x === 'string') ? parseInt(x, 10) : x;

function unlockBtn(status1, status2) {
    if(status1 == true && status2 == true) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

let checkPhoneNumber = () => {
    let number = conToNum(phoneNumber.value);
    if(typeof number === NaN || number < 100000000) {
        alert('Wprowadzono nieprawidłowy numer!');
        btn1 = false;
    }
    else {
        btn1 = true;
    }
    unlockBtn(btn1, btn2);
}

let checkPickupCode = () => {
    let pickup = conToNum(pickupCode.value);
    if(typeof pickup === NaN || pickup < 1000 || pickup > 9999) {
        alert('Wprowadzono nieprawidłowy kod odbioru!\nKod powinen posiadać 4 liczby.');
        btn2 = false;
    }
    else {
        btn2 = true;
    }
    unlockBtn(btn1, btn2);
}

phoneNumber.addEventListener('change', checkPhoneNumber);
pickupCode.addEventListener('change', checkPickupCode);
btn.addEventListener('focus', unlockBtn(btn1, btn2));

// Czas odbioru przesyłki

let timeout;
let time = 0;

function startTime() {
    time++;
    timeout = setTimeout('startTime()', 1000);
}

window.onload = startTime;

function printTime() {
    clearTimeout(timeout);
    document.getElementById('time').innerHTML = time;
}

btn.addEventListener('click', printTime);

// Okno wyskakujące po poprawnym wpisaniu danych przesyłki (modal window)

let modal = document.getElementById('webModal');
let modalBtn = document.getElementById('confirm');
let span = document.getElementsByClassName('closeBtn')[0];

// modalBtn.onclik - loader
modalBtn.onclick = function() {
    const loader = timeLoader => new Promise(resolve => setTimeout(resolve, timeLoader));
    loader(1000).then(() => modal.style.display = "block")
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Funkcje dla dwóch przycisków w modal window

let modalBtn1 = document.getElementById('modalBtn1');
let modalBtn2 = document.getElementById('modalBtn2');

modalBtn1.onclick = function() {
    modal.style.display = "none";
}

modalBtn2.onclick = function() {
    window.location.reload(true);
}