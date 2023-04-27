const display = document.querySelector("#show");
const copyBtn = document.querySelector("#copy");
const inputField = document.querySelector("#message");
const messageCard = document.querySelector("#emptyMessage");

const filter = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const changeText = (message) => {
  message ? (display.innerHTML = message) : false;
  messageCard.className === "d-none"
    ? console.log("existe")
    : (messageCard.classList.add("d-none"), copyBtn.classList.remove("d-none"));
};

const encrypt = () => {
  import("./modules.js")
    .then((module) => module.replaceVocal(inputField.value, filter))
    .then((response) => changeText(response))
    .catch((error) => console.log(error));
};

const decrypt = () => {
  import("./modules.js")
    .then((module) => module.replaceWord(display.textContent, filter))
    .then((response) => changeText(response))
    .catch((error) => console.log(error));
};

const copyMessage = () => {
  const copyText = display.textContent;
  navigator.clipboard
    .writeText(copyText)
    .then((success) => alert("Mensaje copiado"))
    .catch((error) => alert("No se pudo copiar"));
};
