const filterString = (string) => {
  const regex = /[^\w\s]|(?=[A-Z])/g;
  return string !== "" && !regex.test(string) ? true : false;
};

export const invertObj = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
};

export const replaceVocal = (string, filterObj) => {
  return filterString(string)
    ? string.replace(/[aeiou]/gi, (match) => filterObj[match] || match)
    : new Error("no pasa validacion");  
};

export const replaceWord = (string, filterObj) => {
  const obj = invertObj(filterObj);
  return filterString(string)
    ? string.replace(
        /(ai|enter|imes|ober|ufat)/gi,
        (match) => obj[match] || match
      )
    : new Error("no pasa validacion");
};
