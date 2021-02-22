const randomNumber = (min, max) => {
  min = 1;
  max = 151;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomNumber;
