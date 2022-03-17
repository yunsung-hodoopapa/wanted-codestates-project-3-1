export const debounce = (fn, delay = 50) => {
  let time;
  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), delay);
  };
};