







/* theme selector JS */
//event listener to show the color pickers
document.getElementById('themeSelector').addEventListener('click', async () => {
  document.getElementById('themeSelectionContainer').classList.add('expandColorPicker');
});

//get style from page, get the default styles 
var styles = getComputedStyle(document.body);
var currBG = styles.getPropertyValue('--background').trim();
var currFG = styles.getPropertyValue('--foreground').trim();


//check if user has set colors before and change BG and FG accordingly 
if(localStorage.getItem('currBGcolor')){
  document.documentElement.style.setProperty('--background',localStorage.getItem('currBGcolor'))
  currBG = localStorage.getItem('currBGcolor')
}
if(localStorage.getItem('currFGcolor')){
  document.documentElement.style.setProperty('--foreground',localStorage.getItem('currFGcolor'))
  currFG = localStorage.getItem('currFGcolor')
}

//set the variables to input elements
const colorSelectedBG = document.getElementById('BGcolor');
const colorSelectedFG = document.getElementById('FGcolor');

//set the value of the inputs to the currently selected colors
colorSelectedBG.value = currBG;
colorSelectedFG.value = currFG;

colorSelectedBG.addEventListener('change', async (e) => {
  document.documentElement.style.setProperty('--background',e.target.value)
  await localStorage.setItem('currBGcolor',e.target.value)

    //load into header with the custom colors
    document.getElementById('headerLogo').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c6d8ebe72f"><path d="M 384 0 C 171.921875 0 0 171.921875 0 384 C 0 596.078125 171.921875 768 384 768 C 596.078125 768 768 596.078125 768 384 C 768 171.921875 596.078125 0 384 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c6d8ebe72f)"><rect x="-76.8" width="921.6" fill="${localStorage.getItem('currFGcolor')}" y="-76.799999" height="921.599993" fill-opacity="1"/></g><path fill="${localStorage.getItem('currBGcolor')}" d="M 492.203125 184.746094 C 470.871094 199.953125 459.042969 226.777344 450.808594 250.855469 C 447.429688 260.570312 454.398438 272.820312 465.167969 273.03125 C 482.699219 273.453125 500.226562 273.664062 517.542969 273.875 C 533.171875 274.300781 554.082031 277.46875 568.230469 270.074219 C 576.679688 265.640625 576.890625 254.867188 569.707031 249.164062 C 556.613281 239.027344 534.015625 239.660156 518.179688 239.027344 C 499.804688 238.394531 481.429688 238.605469 463.269531 240.082031 C 469.605469 247.265625 475.941406 254.65625 482.0625 261.835938 C 487.765625 238.394531 499.59375 217.484375 506.5625 194.460938 C 509.519531 185.378906 499.382812 179.679688 492.203125 184.746094 Z M 492.203125 184.746094 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 89.246094 420.875 C 108.253906 465.230469 146.691406 496.699219 188.085938 519.511719 C 234.125 544.855469 284.808594 561.75 336.765625 569.355469 C 437.503906 583.929688 543.730469 557.105469 615.960938 483.183594 C 651.652344 446.644531 679.738281 398.699219 682.0625 346.742188 C 682.695312 333.648438 664.113281 329.425781 659.464844 342.097656 C 645.527344 379.902344 626.519531 415.386719 598.855469 445.164062 C 571.398438 474.523438 538.242188 496.910156 500.859375 511.90625 C 412.160156 547.601562 306.984375 535.5625 221.03125 497.96875 C 176.046875 477.902344 136.976562 447.699219 104.242188 410.949219 C 97.058594 403.136719 85.234375 411.582031 89.246094 420.875 Z M 89.246094 420.875 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 233.914062 209.035156 C 221.664062 236.28125 219.761719 271.976562 229.054688 300.488281 C 233.066406 312.527344 253.976562 314.640625 253.765625 299.011719 C 253.765625 284.015625 252.074219 269.019531 251.230469 254.023438 C 250.386719 239.238281 250.175781 224.664062 248.484375 210.09375 C 247.640625 202.066406 236.660156 202.910156 233.914062 209.035156 Z M 233.914062 209.035156 " fill-opacity="1" fill-rule="nonzero"/></svg>
  `
});
colorSelectedFG.addEventListener('change', async (e) => {
  document.documentElement.style.setProperty('--foreground',e.target.value)
  await localStorage.setItem('currFGcolor',e.target.value)

    //load into header with the custom colors
    document.getElementById('headerLogo').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c6d8ebe72f"><path d="M 384 0 C 171.921875 0 0 171.921875 0 384 C 0 596.078125 171.921875 768 384 768 C 596.078125 768 768 596.078125 768 384 C 768 171.921875 596.078125 0 384 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c6d8ebe72f)"><rect x="-76.8" width="921.6" fill="${localStorage.getItem('currFGcolor')}" y="-76.799999" height="921.599993" fill-opacity="1"/></g><path fill="${localStorage.getItem('currBGcolor')}" d="M 492.203125 184.746094 C 470.871094 199.953125 459.042969 226.777344 450.808594 250.855469 C 447.429688 260.570312 454.398438 272.820312 465.167969 273.03125 C 482.699219 273.453125 500.226562 273.664062 517.542969 273.875 C 533.171875 274.300781 554.082031 277.46875 568.230469 270.074219 C 576.679688 265.640625 576.890625 254.867188 569.707031 249.164062 C 556.613281 239.027344 534.015625 239.660156 518.179688 239.027344 C 499.804688 238.394531 481.429688 238.605469 463.269531 240.082031 C 469.605469 247.265625 475.941406 254.65625 482.0625 261.835938 C 487.765625 238.394531 499.59375 217.484375 506.5625 194.460938 C 509.519531 185.378906 499.382812 179.679688 492.203125 184.746094 Z M 492.203125 184.746094 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 89.246094 420.875 C 108.253906 465.230469 146.691406 496.699219 188.085938 519.511719 C 234.125 544.855469 284.808594 561.75 336.765625 569.355469 C 437.503906 583.929688 543.730469 557.105469 615.960938 483.183594 C 651.652344 446.644531 679.738281 398.699219 682.0625 346.742188 C 682.695312 333.648438 664.113281 329.425781 659.464844 342.097656 C 645.527344 379.902344 626.519531 415.386719 598.855469 445.164062 C 571.398438 474.523438 538.242188 496.910156 500.859375 511.90625 C 412.160156 547.601562 306.984375 535.5625 221.03125 497.96875 C 176.046875 477.902344 136.976562 447.699219 104.242188 410.949219 C 97.058594 403.136719 85.234375 411.582031 89.246094 420.875 Z M 89.246094 420.875 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 233.914062 209.035156 C 221.664062 236.28125 219.761719 271.976562 229.054688 300.488281 C 233.066406 312.527344 253.976562 314.640625 253.765625 299.011719 C 253.765625 284.015625 252.074219 269.019531 251.230469 254.023438 C 250.386719 239.238281 250.175781 224.664062 248.484375 210.09375 C 247.640625 202.066406 236.660156 202.910156 233.914062 209.035156 Z M 233.914062 209.035156 " fill-opacity="1" fill-rule="nonzero"/></svg>
  `
});


/* checkbox close on clicking outside of it */
const checkboxToggle = document.getElementById('checkbox_toggle');
const navbar = document.querySelector('.navbar');

document.addEventListener('click', function(event) {
  if (!navbar.contains(event.target)) {
    checkboxToggle.checked = false;
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

/* checkbox close on clicking outside of it */
const colorPicker = document.getElementById('themeSelectionContainer');
const inputsColors = document.getElementById('colorSelectors');

document.addEventListener('click', function(event) {
  if (!colorPicker.contains(event.target)) {
    if(inputsColors.style.display !== 'none'){
      colorPicker.classList.remove('expandColorPicker')
    }
  }
});




const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


/* swap colors in the theme editor */
var swapper = document.getElementById('themeSwapperIcon')
swapper.addEventListener('click', async () => {
  
  currBG = localStorage.getItem('currFGcolor');
  currFG = localStorage.getItem('currBGcolor');

  localStorage.setItem('currBGcolor', currBG);
  localStorage.setItem('currFGcolor', currFG);

  colorSelectedBG.value = currBG;
  colorSelectedFG.value = currFG;

  setTimeout(window.location.reload(),1000);

});


async function loadIcon() {
  var link = document.createElement('link');
  link.rel = 'icon';
  link.href = 'img/png/lightBG.png';
  link.type = 'image/png'
  document.head.appendChild(link);

  var link2 = document.createElement('link');
  link2.rel = 'icon';
  link2.href = 'img/svg/darkIcon.svg';
  link2.type = 'image/x-icon'
  document.head.appendChild(link2);

  //load into header with the custom colors
  if(localStorage.getItem('currBGcolor')){
    document.getElementById('headerLogo').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c6d8ebe72f"><path d="M 384 0 C 171.921875 0 0 171.921875 0 384 C 0 596.078125 171.921875 768 384 768 C 596.078125 768 768 596.078125 768 384 C 768 171.921875 596.078125 0 384 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c6d8ebe72f)"><rect x="-76.8" width="921.6" fill="${localStorage.getItem('currFGcolor')}" y="-76.799999" height="921.599993" fill-opacity="1"/></g><path fill="${localStorage.getItem('currBGcolor')}" d="M 492.203125 184.746094 C 470.871094 199.953125 459.042969 226.777344 450.808594 250.855469 C 447.429688 260.570312 454.398438 272.820312 465.167969 273.03125 C 482.699219 273.453125 500.226562 273.664062 517.542969 273.875 C 533.171875 274.300781 554.082031 277.46875 568.230469 270.074219 C 576.679688 265.640625 576.890625 254.867188 569.707031 249.164062 C 556.613281 239.027344 534.015625 239.660156 518.179688 239.027344 C 499.804688 238.394531 481.429688 238.605469 463.269531 240.082031 C 469.605469 247.265625 475.941406 254.65625 482.0625 261.835938 C 487.765625 238.394531 499.59375 217.484375 506.5625 194.460938 C 509.519531 185.378906 499.382812 179.679688 492.203125 184.746094 Z M 492.203125 184.746094 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 89.246094 420.875 C 108.253906 465.230469 146.691406 496.699219 188.085938 519.511719 C 234.125 544.855469 284.808594 561.75 336.765625 569.355469 C 437.503906 583.929688 543.730469 557.105469 615.960938 483.183594 C 651.652344 446.644531 679.738281 398.699219 682.0625 346.742188 C 682.695312 333.648438 664.113281 329.425781 659.464844 342.097656 C 645.527344 379.902344 626.519531 415.386719 598.855469 445.164062 C 571.398438 474.523438 538.242188 496.910156 500.859375 511.90625 C 412.160156 547.601562 306.984375 535.5625 221.03125 497.96875 C 176.046875 477.902344 136.976562 447.699219 104.242188 410.949219 C 97.058594 403.136719 85.234375 411.582031 89.246094 420.875 Z M 89.246094 420.875 " fill-opacity="1" fill-rule="nonzero"/><path fill="${localStorage.getItem('currBGcolor')}" d="M 233.914062 209.035156 C 221.664062 236.28125 219.761719 271.976562 229.054688 300.488281 C 233.066406 312.527344 253.976562 314.640625 253.765625 299.011719 C 253.765625 284.015625 252.074219 269.019531 251.230469 254.023438 C 250.386719 239.238281 250.175781 224.664062 248.484375 210.09375 C 247.640625 202.066406 236.660156 202.910156 233.914062 209.035156 Z M 233.914062 209.035156 " fill-opacity="1" fill-rule="nonzero"/></svg>
    `
  }
  else{
    document.getElementById('headerLogo').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" zoomAndPan="magnify" viewBox="0 0 768 767.999994" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c6d8ebe72f"><path d="M 384 0 C 171.921875 0 0 171.921875 0 384 C 0 596.078125 171.921875 768 384 768 C 596.078125 768 768 596.078125 768 384 C 768 171.921875 596.078125 0 384 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c6d8ebe72f)"><rect x="-76.8" width="921.6" fill="#222222" y="-76.799999" height="921.599993" fill-opacity="1"/></g><path fill="#e8e0d6" d="M 492.203125 184.746094 C 470.871094 199.953125 459.042969 226.777344 450.808594 250.855469 C 447.429688 260.570312 454.398438 272.820312 465.167969 273.03125 C 482.699219 273.453125 500.226562 273.664062 517.542969 273.875 C 533.171875 274.300781 554.082031 277.46875 568.230469 270.074219 C 576.679688 265.640625 576.890625 254.867188 569.707031 249.164062 C 556.613281 239.027344 534.015625 239.660156 518.179688 239.027344 C 499.804688 238.394531 481.429688 238.605469 463.269531 240.082031 C 469.605469 247.265625 475.941406 254.65625 482.0625 261.835938 C 487.765625 238.394531 499.59375 217.484375 506.5625 194.460938 C 509.519531 185.378906 499.382812 179.679688 492.203125 184.746094 Z M 492.203125 184.746094 " fill-opacity="1" fill-rule="nonzero"/><path fill="#e8e0d6" d="M 89.246094 420.875 C 108.253906 465.230469 146.691406 496.699219 188.085938 519.511719 C 234.125 544.855469 284.808594 561.75 336.765625 569.355469 C 437.503906 583.929688 543.730469 557.105469 615.960938 483.183594 C 651.652344 446.644531 679.738281 398.699219 682.0625 346.742188 C 682.695312 333.648438 664.113281 329.425781 659.464844 342.097656 C 645.527344 379.902344 626.519531 415.386719 598.855469 445.164062 C 571.398438 474.523438 538.242188 496.910156 500.859375 511.90625 C 412.160156 547.601562 306.984375 535.5625 221.03125 497.96875 C 176.046875 477.902344 136.976562 447.699219 104.242188 410.949219 C 97.058594 403.136719 85.234375 411.582031 89.246094 420.875 Z M 89.246094 420.875 " fill-opacity="1" fill-rule="nonzero"/><path fill="#e8e0d6" d="M 233.914062 209.035156 C 221.664062 236.28125 219.761719 271.976562 229.054688 300.488281 C 233.066406 312.527344 253.976562 314.640625 253.765625 299.011719 C 253.765625 284.015625 252.074219 269.019531 251.230469 254.023438 C 250.386719 239.238281 250.175781 224.664062 248.484375 210.09375 C 247.640625 202.066406 236.660156 202.910156 233.914062 209.035156 Z M 233.914062 209.035156 " fill-opacity="1" fill-rule="nonzero"/></svg>
    `
  }
  



};

loadIcon();


async function gohome(){
  window.location.replace('index.html')
};

async function logout(){
  document.getElementById('headerLogo').click()
  window.ic.plug.disconnect();
};


