export const isValidEmail = value => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value);
};

export const idGenerator = () => {
  return Math.floor(Math.random()*10000)
};

export const sortArrayFromDate = (arr, order='asc') => {
 return arr.sort((a, b) => {
   const aDate = new Date(a.date);
   const bDate = new Date(b.date);
   return bDate - aDate;
 })
}