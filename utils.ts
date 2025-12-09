import { ICartItem, ICartTotals, IConfig } from './types.ts';

export const isShopOpen = (config: IConfig): boolean => {
  const now = new Date();
  const currentHour = now.getHours();
  // Simple check: is hour >= openHour AND hour < closeHour
  return currentHour >= config.openHour && currentHour < config.closeHour;
};

export const generateWhatsAppLink = (
  cart: ICartItem[],
  totals: ICartTotals,
  config: IConfig
): string => {
  if (!isShopOpen(config)) {
    throw new Error(`We are currently closed. Open from ${config.openHour}:00 to ${config.closeHour}:00.`);
  }

  if (cart.length === 0) return '';

  const br = '%0A'; // Line break for URL
  let message = `*New Order - Everytime Creamery*${br}${br}`;

  cart.forEach((item) => {
    const price = item.selectedSize === '250ml' ? item.price250 : item.price500;
    message += `${item.quantity} x ${item.name} (${item.selectedSize}) - ₹${price * item.quantity}${br}`;
  });

  message += `${br}-------------------------${br}`;
  message += `Subtotal: ₹${totals.subtotal}${br}`;
  
  if (totals.shipping === 0) {
    message += `Delivery: FREE${br}`;
  } else {
    message += `Delivery: ₹${totals.shipping}${br}`;
  }
  
  message += `*Total Payble: ₹${totals.total}*${br}`;
  message += `${br}_Note: Delivery within 5km from Royapuram only. Orders above ₹250 for free delivery._`;

  return `https://wa.me/${config.phones.primary}?text=${message}`;
};