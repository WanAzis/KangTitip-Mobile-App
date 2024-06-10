import {ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Text, View } from '@/constants/Themed';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { router } from 'expo-router';

export default function Payment() {
    return(
        <View style={styles.container}>
            <Text>Payment</Text>
        </View>
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
        backgroundColor: '#A9A9A9',
        height: 1,
        width: '100%',
    },
});