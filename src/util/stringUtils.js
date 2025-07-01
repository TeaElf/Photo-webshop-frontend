const handleUndefined = (param, placeholder) => {
  if (param) {
    return param;
  } else {
    return placeholder;
  }
};

const handlePrice = (price) => {
  return "€" + price.toFixed(2);
};

const capitalizeText = (text) => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  return capitalizedText;
};

const addHashtag = (tag) => {
  return "#" + tag;
};
export { handleUndefined, handlePrice, capitalizeText, addHashtag };
