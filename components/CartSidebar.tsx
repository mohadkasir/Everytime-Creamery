import { useState, FC } from 'react';
import { useCartStore } from '../store.ts';
import { APP_CONFIG } from '../constants.ts';
import { generateWhatsAppLink, isShopOpen } from '../utils.ts';

const CartSidebar: FC = () => {
  const { cart, updateQuantity, removeFromCart, getTotals } = useCartStore();
  const totals = getTotals();
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = () => {
    try {
      const link = generateWhatsAppLink(cart, totals, APP_CONFIG);
      window.open(link, '_blank');
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setTimeout(() => setError(null), 5000);
    }
  };

  const isOpen = isShopOpen(APP_CONFIG);

  if (cart.length === 0) {
    return (
      <div className="bg-white p-golden-lg border-t-4 border-brand-gold h-fit sticky top-6 shadow-md rounded-sm">
        <h2 className="font-serif text-2xl text-brand-primary mb-2">Your Tub</h2>
        <p className="text-brand-dark/60 font-sans">Your cart is empty. Add some sweetness!</p>
        <div className="mt-4 text-xs text-brand-dark/40">
          Delivery: {APP_CONFIG.openHour}:00 - {APP_CONFIG.closeHour}:00
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-golden-lg border-t-4 border-brand-primary h-fit sticky top-6 shadow-xl rounded-sm transition-all duration-618">
      <h2 className="font-serif text-2xl text-brand-primary mb-6 flex justify-between items-center">
        Your Tub
        <span className="text-sm font-sans bg-brand-cream text-brand-dark px-2 py-1 rounded-full">{cart.length} items</span>
      </h2>

      <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto no-scrollbar pr-2">
        {cart.map((item) => (
          <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-start border-b border-brand-cream pb-4">
            <div className="flex-1">
              <h4 className="font-serif text-brand-dark font-bold">{item.name}</h4>
              <p className="text-xs text-brand-dark/60">{item.selectedSize}</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center border border-brand-cream rounded-full">
                <button 
                  onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                  className="px-2 py-1 text-brand-primary hover:bg-brand-cream rounded-l-full transition-colors"
                >
                  -
                </button>
                <span className="text-sm w-4 text-center font-bold">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                  className="px-2 py-1 text-brand-primary hover:bg-brand-cream rounded-r-full transition-colors"
                >
                  +
                </button>
              </div>
              <p className="font-serif text-brand-primary w-12 text-right">
                ₹{(item.selectedSize === '250ml' ? item.price250 : item.price500) * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-6 font-sans text-sm text-brand-dark/80">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totals.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span className={totals.shipping === 0 ? "text-green-600 font-bold" : ""}>
            {totals.shipping === 0 ? "FREE" : `₹${totals.shipping}`}
          </span>
        </div>
        {totals.shipping > 0 && (
          <p className="text-xs text-brand-primary/60 italic text-right">
            Add ₹{APP_CONFIG.freeThreshold - totals.subtotal} more for free delivery
          </p>
        )}
        <div className="flex justify-between font-serif text-xl text-brand-primary pt-4 border-t border-brand-dark/10">
          <span>Total</span>
          <span>₹{totals.total}</span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-800 text-xs rounded border border-red-200">
          {error}
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={!isOpen}
        className={`w-full py-4 text-white font-serif font-bold tracking-wider rounded-sm transition-all duration-382 ${
          isOpen 
            ? 'bg-brand-primary hover:bg-brand-dark hover:scale-[1.01] shadow-lg' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isOpen ? 'ORDER VIA WHATSAPP' : 'CURRENTLY CLOSED'}
      </button>
      <p className="text-center text-[10px] text-brand-dark/40 mt-2">
        Payment via UPI/Cash on Delivery
      </p>
    </div>
  );
};

export default CartSidebar;