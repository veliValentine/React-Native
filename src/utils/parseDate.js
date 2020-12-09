
const parseDate = (date) => {
  if(!(date instanceof Date)){
    date = new Date(date);
  }
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

export default parseDate;