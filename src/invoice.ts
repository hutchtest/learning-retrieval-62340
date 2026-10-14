export function invoiceTotal(unitPrice: number, quantity: number, discountPercent = 0): number {
  return unitPrice * quantity * (1 - discountPercent);
}
