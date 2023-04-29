const display = document.querySelector("#show");
const copyBtn = document.querySelector("#copy");
const node = document.querySelector("#alert");
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
    ? false
    : (messageCard.classList.add("d-none"), copyBtn.classList.remove("d-none"));
};

const encrypt = () => {
  import("./modules.js")
    .then((module) => module.replaceVocal(inputField.value, filter))
    .then((response) => {
      response ? changeText(response) : false;
    });
};

const decrypt = () => {
  import("./modules.js")
    .then((module) => module.replaceWord(display.textContent, filter))
    .then((response) => {
      response ? changeText(response) : false;
    });
};

const copyMessage = () => {
  const copyText = display.textContent;
  navigator.clipboard
    .writeText(copyText)
    .then(
      import("./modules.js")
      .then(module => module.lauchAlert('Mensaje copiado al portapapel!', 'alertt-success'))
    )
  }