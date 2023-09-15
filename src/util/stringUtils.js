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

export { handleUndefined, handlePrice };
