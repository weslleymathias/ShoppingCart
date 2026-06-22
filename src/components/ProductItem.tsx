import { View, Text, Button } from 'react-native';
import { useCart } from '../context/CartContext';

export function ProductItem({ product }: any) {
  const { addToCart } = useCart();
  return (
    <View style={{ padding:12,borderWidth:1,borderRadius:8,marginBottom:10 }}>
      <Text>{product.name}</Text>
      <Text>R$ {product.price.toFixed(2)}</Text>
      <Button title="Adicionar" onPress={() => addToCart(product)} />
    </View>
  );
}
