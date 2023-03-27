"use strict";

let menu_electronnye_sigarety = document.querySelector(
  ".catalog__conteiner__electronnye_sigarety"
);
let menu_odnorazovye_sigarety = document.querySelector(
  ".catalog__conteiner__odnorazovye_sigarety"
);
let menu_zhidkosti = document.querySelector(".catalog__conteiner__zhidkosti");
let menu_atomayzery = document.querySelector(".catalog__conteiner__atomayzery");
let menu_komplektuyushchie = document.querySelector(
  ".catalog__conteiner__komplektuyushchie"
);

// menu
let buttonElectronnyeSigarety = document.querySelector(
  ".menu__electronnye_sigarety"
);
buttonElectronnyeSigarety.addEventListener("click", function () {
  menu_odnorazovye_sigarety.style.display = "none";
  menu_electronnye_sigarety.style.display = "flex";
  menu_zhidkosti.style.display = "none";
  menu_atomayzery.style.display = "none";
  menu_komplektuyushchie.style.display = "none";
});

let buttonOdnorazovyeSigarety = document.querySelector(
  ".menu__odnorazovye_sigarety"
);
buttonOdnorazovyeSigarety.addEventListener("click", function () {
  menu_odnorazovye_sigarety.style.display = "flex";
  menu_electronnye_sigarety.style.display = "none";
  menu_zhidkosti.style.display = "none";
  menu_atomayzery.style.display = "none";
  menu_komplektuyushchie.style.display = "none";
});

let buttonZhidkosti = document.querySelector(".menu__zhidkosti");
buttonZhidkosti.addEventListener("click", function () {
  menu_odnorazovye_sigarety.style.display = "none";
  menu_electronnye_sigarety.style.display = "none";
  menu_zhidkosti.style.display = "flex";
  menu_atomayzery.style.display = "none";
  menu_komplektuyushchie.style.display = "none";
});

let buttonAtomayzery = document.querySelector(".menu__atomayzery");
buttonAtomayzery.addEventListener("click", function () {
  menu_odnorazovye_sigarety.style.display = "none";
  menu_electronnye_sigarety.style.display = "none";
  menu_zhidkosti.style.display = "none";
  menu_atomayzery.style.display = "flex";
  menu_komplektuyushchie.style.display = "none";
});
let buttonKomplektuyushchie = document.querySelector(
  ".menu__komplektuyushchie"
);
buttonKomplektuyushchie.addEventListener("click", function () {
  menu_odnorazovye_sigarety.style.display = "none";
  menu_electronnye_sigarety.style.display = "none";
  menu_zhidkosti.style.display = "none";
  menu_atomayzery.style.display = "none";
  menu_komplektuyushchie.style.display = "flex";
});
