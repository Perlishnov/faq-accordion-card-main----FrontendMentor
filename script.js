"use strict";
const dropdownHeader = document.getElementsByClassName("dropdown-header");
const dropdownIcon = document.getElementsByClassName("dropdown-icon");
const dropdownParagraph = document.getElementsByClassName("dropdown-paragraph");

dropdownIcon[0].addEventListener("click", () => {
  dropdownIcon[0].classList.toggle("rotate");
  dropdownHeader[0].classList.toggle("active");
  dropdownParagraph[0].classList.toggle("show");
});

dropdownIcon[1].addEventListener("click", () => {
  dropdownIcon[1].classList.toggle("rotate");
  dropdownHeader[1].classList.toggle("active");
  dropdownParagraph[1].classList.toggle("show");
});
dropdownIcon[2].addEventListener("click", () => {
  dropdownIcon[2].classList.toggle("rotate");
  dropdownHeader[2].classList.toggle("active");
  dropdownParagraph[2].classList.toggle("show");
});
dropdownIcon[3].addEventListener("click", () => {
  dropdownIcon[3].classList.toggle("rotate");
  dropdownHeader[3].classList.toggle("active");
  dropdownParagraph[3].classList.toggle("show");
});
dropdownIcon[4].addEventListener("click", () => {
  dropdownIcon[4].classList.toggle("rotate");
  dropdownHeader[4].classList.toggle("active");
  dropdownParagraph[4].classList.toggle("show");
});
