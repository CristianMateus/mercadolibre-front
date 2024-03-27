export const formatCurrency = (
  amount: number,
  currency: string,
  decimals = 2
): string => {
  const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: true,
  });

  const formattedAmount = formatter.format(amount);

  return `${currency} ${formattedAmount}`;
};
