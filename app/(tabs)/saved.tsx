import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '@/components/ProductCard';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { AntDesign, Ionicons } from '@expo/vector-icons';

// // Data dummy untuk produk
// // const products = Array.from({ length: 10 }, (_, index) => ({
// //   id: index.toString(),
// //   name: `Product ${index + 1}`,
// // }));

const dummyData = [
  {
    id: "1",
    name: "TV Set",
    price: "50.000",
    deadline: "2024-06-15",
    shippingDate: "2024-06-20",
    image: require("../../assets/images/product-1.jpeg"),
  },
  {
    id: "2",
    name: "Gelas Motif Bunga",
    price: "62.500",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-2.jpeg"),
  },
  {
    id: "3",
    name: "Proyektor Modern",
    price: "350.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-3.jpeg"),
  },
  {
    id: "4",
    name: "Oven/Microwave Standard",
    price: "735.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-4.jpeg"),
  },
  {
    id: "5",
    name: "Sisir Rambut",
    price: "55.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-1.jpeg"),
  },
  {
    id: "6",
    name: "Sapu Serba Guna",
    price: "33.333",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-2.jpeg"),
  },
  {
    id: "7",
    name: "Stiker Spongebob",
    price: "27.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-3.jpeg"),
  },
  {
    id: "8",
    name: "Kompor Listrik",
    price: "1.000.999",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-4.jpeg"),
  },
];

export default function SavedScreen() {
  return (
    <View style={styles.backdrop}>
      {/* Ttile + filter and sort */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}>
        <Text style={{ color: "#004859", fontWeight: "bold", fontSize: 14 }}>
          XX Produk
        </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            backgroundColor: "transparent",
          }}>
          <TouchableOpacity
            style={{
              aspectRatio: 1,
              borderRadius: 1000,
              backgroundColor: "#D9D9D9",
              padding: 5,
            }}>
            <Ionicons name="filter" size={14} color="#616161" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              aspectRatio: 1,
              borderRadius: 1000,
              backgroundColor: "#D9D9D9",
              padding: 5,
            }}>
            <AntDesign name="filter" size={14} color="#616161" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard style={{marginHorizontal: 5}} product={item} />}
        showsVerticalScrollIndicator={false}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
    rowGap: 20,
    backgroundColor: "#F0F0F0",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
