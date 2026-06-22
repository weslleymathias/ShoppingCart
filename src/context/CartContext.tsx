import { createContext, useContext, useState, ReactNode } from 'react';

interface Product { id: string; name: string; price: number; }
interface CartItem extends Product { quantity: number; }

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const found = cart.find(i => i.id === product.id);
    if (found) {
      increaseQuantity(product.id);
      return;
    }
    setCart(prev => [...prev, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = (id: string) =>
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));

  const decreaseQuantity = (id: string) =>
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
      .filter(i => i.quantity > 0)
    );

  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
  const totalPrice = cart.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <CartContext.Provider value={{cart, addToCart, increaseQuantity, decreaseQuantity, totalItems, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
