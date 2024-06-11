import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { useState } from 'react';

export default function NotifScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = [
    { key: 'Semua' },
    { key: 'Transaksi' },
    { key: 'Request' },
    { key: 'Informasi' },
    { key: 'Selesai' },
  ];

  interface CategoryItem {
    key: string;
  }

  const renderCategory = ({ item } : { item: CategoryItem }) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.key)}
      style={[
        styles.categoryButton,
        item.key === selectedCategory && styles.selectedCategory,
      ]}
    >
      <Text style={[styles.categoryText, item.key === selectedCategory && styles.selectedText]}>{item.key}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.backdrop}>
      {/* notification category: Semua, Transaksi, Request, Selesai */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.key}
        style={styles.categoryList}
      />
      {/* the notifications */}
      <View style={styles.notificationContainer}>
        {selectedCategory === 'Semua' || selectedCategory === 'Transaksi' ? (
          <View style={{backgroundColor: 'white', padding: 20, rowGap: 10}}>
            {/* title & date*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>Pesananmu sedang menunggu konfirmasi!</Text>
              <Text style={{fontWeight: 'regular', fontSize: 12}}>11/06</Text>
            </View>
            {/* description */}
            <Text style={{width: '97.5%', textAlign: 'justify'}}>
              Pesananmu sedang menunggu konfirmasi! Kami telah menerima detail pesananmu dan sedang 
              menunggu konfirmasi dari penjual. Kamu akan menerima pemberitahuan lebih lanjut setelah 
              pesananmu dikonfirmasi. Terima kasih telah menggunakan layanan kami!
            </Text>
          </View>
        ) : (
          <View style={{backgroundColor: '#F0F0F0'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Belum ada notifikasi untuk {selectedCategory}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'stretch',
    rowGap: 20,
    paddingTop: 20,
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
  categoryList: {
    flexGrow: 0,
    paddingLeft: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#DFDFDF',
    borderRadius: 20,
  },
  selectedCategory: {
    backgroundColor: '#3A76BD',
  },
  categoryText: {
    color: '#8C8C8C',
    fontWeight: 'regular',
    fontSize: 14,
  },
  selectedText: {
    color: 'white',
  },
  notificationContainer: {
  },
});
