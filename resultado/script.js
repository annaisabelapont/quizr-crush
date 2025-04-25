import { getResult } from "./getResult.js";

const personName = localStorage.getItem("personName");

if (personName) {
  document.getElementById("person-name").innerText = personName.toUpperCase();
} else {
  document.getElementById("person-name").innerText = "FULANO";
}

//

const result = getResult(personName);
document.getElementById("love-name").innerText = result.love;
document.getElementById("love-photo").src = `../img/${result.imgSrc}`;

//

const buttonRemake = document.getElementById("remake-test");

buttonRemake.addEventListener("click", () => {
  localStorage.clear();
});
