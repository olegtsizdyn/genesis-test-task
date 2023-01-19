export const currencyFormatter = (number) => {
  if (Number.isInteger(number)) {
    return new Intl.NumberFormat().format(number);
  } else {
    return 0
  }
}