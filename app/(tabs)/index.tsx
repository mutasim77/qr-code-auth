import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-8">Welcome to QR Auth App</Text>
      <TouchableOpacity
        onPress={() => router.push('/QRScanner')}
        className="bg-blue-500 py-3 px-6 rounded-lg"
      >
        <Text className="text-white font-semibold text-lg">QR Auth</Text>
      </TouchableOpacity>
    </View>
  );
}