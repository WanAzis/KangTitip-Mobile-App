import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';

export default function CheckoutScreen() {
  return (
    <View style={styles.backdrop}>
      {/* title alamat dan tombol pilih alamat lain */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 80,
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
    backgroundColor: '#A9A9A9',
    height: 1,
    width: '100%',
  },
});
