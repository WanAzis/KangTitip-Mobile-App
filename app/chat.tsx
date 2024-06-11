import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { MonoText } from '@/components/StyledText';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ChatScreen() {
  return (
    <View style={styles.backdrop}>
      <Chat name="Jastiper Jane" lastChat="Aman kak 👌" backgroundColor="#6A77ED" date="09/04" jumlahChat={3}/>
      <Chat name="Jastiper Bob" lastChat="Oalah, oke deh mang" backgroundColor="#366FB3" date="29/03"/>
      <Chat name="Jastiper Kean" lastChat="Langsung request aja yah kak" backgroundColor="#49C0DC" date="20/03" jumlahChat={1}/>
      <Chat name="Jastiper Alice" lastChat="Waduh???" backgroundColor="#35B02A" date="19/03" jumlahChat={1}/>
    </View>
  );
}

interface ChatProps {
  name: string;
  lastChat: string;
  backgroundColor: string;
  date: string;
  jumlahChat?: number;
}

const Chat:React.FC<ChatProps> = ({name, lastChat, backgroundColor, date, jumlahChat = 0}) => {
  return (
    <TouchableOpacity style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1, borderColor: '#ccc'}}>
      {/* prof. image + nama */}
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
        <View
          style={{
            borderRadius: 100,
            borderWidth: 3,
            borderColor: "#1561BC",
            backgroundColor,
            padding: 10,
          }}>
          <FontAwesome5 name="store-alt" size={18} color="white" />
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text>{lastChat}</Text>
        </View>
      </View>
      {/* date and number of chats unread */}
      <View style={{alignItems: 'center', rowGap: 5}}>
        <Text style={{fontSize: 12}}>{date}</Text>
        {jumlahChat > 0 && (
          <Text style={{padding:2, width: 20, borderRadius: 50, backgroundColor: '#FFA722', textAlign: 'center', alignSelf: 'flex-end', fontSize: 10, fontWeight: 'bold'}}>{jumlahChat}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
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
