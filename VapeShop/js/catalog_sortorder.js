"use string";

let popup = document.querySelectorAll(".popup");
let product__popup_exit = document.querySelectorAll(".product__popup-exit");

// обработка блоков товаров в каталоге
let name__electronnye_sigarety_1 = document.querySelector(
  "#name__electronnye_sigarety-1"
);
let electronnye_sigarety_1 = document.querySelector("#electronnye-sigarety-1");

let name__electronnye_sigarety_2 = document.querySelector(
  "#name__electronnye_sigarety-2"
);
let electronnye_sigarety_2 = document.querySelector("#electronnye-sigarety-2");
let name__electronnye_sigarety_3 = document.querySelector(
  "#name__electronnye_sigarety-3"
);
let electronnye_sigarety_3 = document.querySelector("#electronnye-sigarety-3");
let name__electronnye_sigarety_4 = document.querySelector(
  "#name__electronnye_sigarety-4"
);
let electronnye_sigarety_4 = document.querySelector("#electronnye-sigarety-4");
let name__electronnye_sigarety_5 = document.querySelector(
  "#name__electronnye_sigarety-5"
);
let electronnye_sigarety_5 = document.querySelector("#electronnye-sigarety-5");
let name__electronnye_sigarety_6 = document.querySelector(
  "#name__electronnye_sigarety-6"
);
let electronnye_sigarety_6 = document.querySelector("#electronnye-sigarety-6");
let name__electronnye_sigarety_7 = document.querySelector(
  "#name__electronnye_sigarety-7"
);
let electronnye_sigarety_7 = document.querySelector("#electronnye-sigarety-7");

// функции по открыванию товаров
name__electronnye_sigarety_1.addEventListener("click", function () {
  electronnye_sigarety_1.style.display = "block";
});
name__electronnye_sigarety_2.addEventListener("click", function () {
  electronnye_sigarety_2.style.display = "block";
});
name__electronnye_sigarety_3.addEventListener("click", function () {
  electronnye_sigarety_3.style.display = "block";
});
name__electronnye_sigarety_4.addEventListener("click", function () {
  electronnye_sigarety_4.style.display = "block";
});
name__electronnye_sigarety_5.addEventListener("click", function () {
  electronnye_sigarety_5.style.display = "block";
});
name__electronnye_sigarety_6.addEventListener("click", function () {
  electronnye_sigarety_6.style.display = "block";
});
name__electronnye_sigarety_7.addEventListener("click", function () {
  electronnye_sigarety_7.style.display = "block";
});

// функция закрывания блоков
for (let elem of product__popup_exit) {
  elem.addEventListener("click", function () {
    for (let elemens of popup) {
      elemens.style.display = "none";
    }
  });
}
