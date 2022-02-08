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
        alert('Wprowadzono nieprawidłowy kod odbioru!');
        btn2 = false;
    }
    else {
        btn2 = true;
    }
    unlockBtn(btn1, btn2);
}

phoneNumber.addEventListener('change', checkPhoneNumber);
pickupCode.addEventListener('change', checkPickupCode);

