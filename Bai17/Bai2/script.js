/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function(){
    return '<img id="hero" width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left;
    console.log('ok: ' + this.left);
  }

}

var hero = new Hero('Img.jpg', 20, 30, 200,30);

function start(){
  document.getElementById('game').innerHTML = hero.getHeroElement();
}
function docReady() {
  window.addEventListener('keydown', moveSelection);
}
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
}
function upArrowPressed() {
  let element = document.getElementById("hero");
  element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
  let element = document.getElementById("hero");
  element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
  let element = document.getElementById("hero");
  element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
  let element = document.getElementById("hero");
  element.style.left = parseInt(element.style.left) + 5 + 'px';
}

start();