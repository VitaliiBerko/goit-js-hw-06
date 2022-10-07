function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body')
const spanColorref = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onClickChangeColor);

function onClickChangeColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanColorref.textContent = bodyRef.style.backgroundColor;
}


