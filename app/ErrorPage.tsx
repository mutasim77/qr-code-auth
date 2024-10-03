import React from 'react';
import { View, Text } from 'react-native';

export default function ErrorPage() {
    return (
        <View className="flex-1 justify-center items-center bg-red-100">
            <Text className="text-3xl font-bold text-red-700">Error</Text>
            <Text className="text-xl mt-4 text-red-600">You don't have access. Please try again.</Text>
        </View>
    )
}