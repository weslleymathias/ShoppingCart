import { View, Text, FlatList, Button } from 'react-native';
import { products } from '../data/products';
import { ProductItem } from '../components/ProductItem';
import { useCart } from '../context/CartContext';

export function HomeScreen({ navigation }: any) {
  const { totalItems } = useCart();
  return (
    <View style={{ flex:1,padding:16 }}>
      <Text style={{ fontSize:24,fontWeight:'bold' }}>Produtos</Text>
      <Button title={`Carrinho (${totalItems})`} onPress={() => navigation.navigate('Cart')} />
      <FlatList data={products} keyExtractor={i => i.id} renderItem={({item}) => <ProductItem product={item} />} />
    </View>
  );
}
