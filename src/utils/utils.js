export const putCommas = (str) => {
  if(typeof str !== 'string')
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else 
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}