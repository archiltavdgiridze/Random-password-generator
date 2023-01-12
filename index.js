const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById("pass2");

function generatePassword() {
  let password1 = ''
  let password2 = '';
  for(let i = 0; i < slider.value; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)]
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
  console.log(password1)
  console.log(password2);
  pass1.textContent = password1;
  pass2.textContent = password2;
}

let slider = document.getElementById("myRange");
let output = document.getElementById("slider_num");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// Copy generated password to clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();



