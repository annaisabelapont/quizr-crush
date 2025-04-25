import { getResult } from "./getResult.js";

const personName = localStorage.getItem("personName");

if (personName) {
  document.getElementById("person-name").innerText = personName.toUpperCase();
} else {
  document.getElementById("person-name").innerText = "QUERIDO";
}

//

const result = getResult(personName);
document.getElementById("love-name").innerText = result.love;

if (result.video) {
  document.getElementById("love-video").src = `../img/${result.imgSrc}`;
  document.getElementById("love-video").load();
  document.getElementById("love-photo").style.display = "none";
} else {
  document.getElementById("love-photo").src = `../img/${result.imgSrc}`;
  document.getElementById("love-video").style.display = "none";
}

//

const buttonRemake = document.getElementById("remake-test");

buttonRemake.addEventListener("click", () => {
  localStorage.clear();
});
