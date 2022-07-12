export const random = (min, max, multiple = 1) => (Math.floor(Math.random() * (max - min)) + min) * multiple;
