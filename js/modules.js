export  const createAlert = (clases, text) => {
  const alert = document.createElement("div");
  const message = text || "Ingrese un texto antes de encriptar";

  alert.textContent = message;
  clases.forEach((clase) => alert.classList.add(clase));
  document.body.appendChild(alert);

  setTimeout(() => {
    document.body.removeChild(alert);
  }, 10000);
  
};

export const lauchAlert = (message, color) => {
  const cssClases = ["position-alert", "alertt", color || "alertt-danger"];
  return createAlert(cssClases, message);
};

export const filterString = (string) => {
  const regex = /[^\w\s]|(?=[A-Z])/g;
  const stringTest = !regex.test(string)
    ? true
    : lauchAlert("El texto tiene mayusculas o caracteres especiales");
  
  return string !== ""
    ? stringTest
    : lauchAlert();
};

export const invertObj = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
};

export const replaceVocal = (string, filterObj) => {
  return filterString(string)
    ? string.replace(/[aeiou]/gi, (match) => filterObj[match] || match)
    : false;
};

export const replaceWord = (string, filterObj) => {
  const obj = invertObj(filterObj);
  
  return filterString(string)
    ? string.replace( /(ai|enter|imes|ober|ufat)/gi, (match) => obj[match] || match )
    : false;
};
