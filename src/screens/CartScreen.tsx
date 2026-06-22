import { View, Text, FlatList } from 'react-native';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';

export function CartScreen() {
  const { cart, totalPrice } = useCart();
  return (
    <View style={{ flex:1,padding:16 }}>
      <Text style={{ fontSize:24,fontWeight:'bold' }}>Meu Carrinho</Text>
      <FlatList data={cart} keyExtractor={i => i.id} renderItem={({item}) => <CartItem item={item} />} />
      <Text>Total: R$ {totalPrice.toFixed(2)}</Text>
    </View>
  );
}
