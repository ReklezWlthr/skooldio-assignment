export const beautifyNumber = (number) => {
  if (!number) return "-";
  return number?.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};
