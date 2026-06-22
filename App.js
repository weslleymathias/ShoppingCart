import { CartProvider } from './src/context/CartContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}