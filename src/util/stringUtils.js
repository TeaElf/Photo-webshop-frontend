const handleUndefined = (param, placeholder) => {
  if (param) {
    return param;
  } else {
    return placeholder;
  }
};

// TODO check handlePrice - add e/$ to price
const handlePrice = (price) => {
  return price + "$";
};

const capitalizeText = (text) => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  return capitalizedText;
};

const addHashtag = (tag) => {
  return "#" + tag;
};
export { handleUndefined, handlePrice, capitalizeText, addHashtag };
