import React from "react";
import { Image } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from "expo-router";
import { Pressable, TextInput, View } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { COLORS } from "@/constants";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerTitle: () => (
            <Image
              source={require('../../assets/images/whiteIcon.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
          headerRight: () => (
            <SearchHeader/>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerTitle: "Produk Disimpan",
          // title: 'Saved',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bookmark-o" color={color} />
          ),
          headerRight: () => (
            <Header/>
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          headerTitle: "Transaksi",
          title: "Transaksi",
          tabBarIcon: ({ color }) => <TabBarIcon name="tags" color={color} />,
          headerRight: () => (
            <Header/>
          ),
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-plus" size={24} color={color} />
          ),
          headerTitle: () => (
            <Image
              source={require('../../assets/images/whiteIcon.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
          headerRight: () => (
            <SearchHeader/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profil Pengguna",
          headerTitleAlign: "center",
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

const SearchHeader: React.FC = () => {
  return (
    <View style={{position: 'absolute', left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome style={{position: 'absolute', zIndex: 10, left: 10}} name="search" size={20} color="#B2B2B2" />
        <TextInput
          onChangeText={(text) => console.log(text)}
          placeholder="Telusuri produk..."
          secureTextEntry={false}
          keyboardType="default"
          autoFocus={false}
          onSubmitEditing={() => console.log('Submit button pressed')}
          style={{ 
            height: 30,
            width: 175,
            backgroundColor: 'white', 
            borderRadius: 25, 
            paddingHorizontal: 10,
            paddingLeft: 35,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Link href="/chat" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="commenting"
                size={20}
                color={COLORS.white}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
        <Link href="/cart" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="shopping-cart"
                size={20}
                color={COLORS.white}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
        <Link href="/notification" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="bell"
                size={20}
                color={COLORS.white}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const Header: React.FC = () => {
  return(
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Link href="/chat" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="commenting"
              size={20}
              color={COLORS.white}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
      <Link href="/cart" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="shopping-cart"
              size={20}
              color={COLORS.white}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
      <Link href="/notification" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="bell"
              size={20}
              color={COLORS.white}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
}