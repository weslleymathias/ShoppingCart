import { View, Text, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

export function CartItem({ item }: any) {
  const { increaseQuantity, decreaseQuantity } = useCart();
  return (
    <View style={{ padding:12,borderWidth:1,borderRadius:8,marginBottom:10 }}>
      <Text>{item.name}</Text>
      <Text>R$ {item.price.toFixed(2)}</Text>
      <View style={{ flexDirection:'row', gap:10 }}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}><Text>➖</Text></TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}><Text>➕</Text></TouchableOpacity>
      </View>
    </View>
  );
}
