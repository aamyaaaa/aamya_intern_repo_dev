export function calculateDiscount(price, discountPercent) {
  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}
