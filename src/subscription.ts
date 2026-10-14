export function subscriptionTotal(unitPrice: number, quantity: number, discountPercent = 0): number {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 250) {
    throw new RangeError("Quantity must be a positive integer");
  }
  return unitPrice * quantity * (1 - discountPercent / 100);
}
