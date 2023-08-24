// javascript
const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '_',
  '-',
  '+',
  '=',
];

// const specialCharcters = [
//   '~',
//   '`',
//   '!',
//   '@',
//   '(',
//   ')',

//   '{',
//   '[',
//   '}',
//   ']',
//   ',',
//   '|',
//   ':',
//   ';',
//   '<',
//   '>',
//   '.',
//   '?',
//   '/',
// ];

let generateBtn = document.querySelector('button');
let lengthEl = document.getElementById('passwordLength');

let first_password = document.getElementById('first_password');
let second_password = document.getElementById('second_password');

let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');

const copyText = (field) => {
  navigator.clipboard.writeText(field.innerText);

  alert('Copied the password: ' + field.innerText);
};

let passwordLength = lengthEl.value;

const passwordGenerator = () => {
  passwordOne.textContent = '';
  passwordTwo.textContent = '';
  for (let i = 0; i < passwordLength; i++) {
    passwordOne.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
    passwordTwo.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
  }
};

lengthEl.addEventListener('change', () => {
  passwordLength = lengthEl.value;
});

generateBtn.addEventListener('click', () => {
  passwordGenerator();
});

first_password.addEventListener('click', () => {
  copyText(passwordOne);
});
second_password.addEventListener('click', () => {
  copyText(passwordTwo);
});
