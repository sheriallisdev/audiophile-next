const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
  trailingZeroDisplay: "stripIfInteger",
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
