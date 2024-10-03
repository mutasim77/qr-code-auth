import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="QRScanner" options={{ title: 'QR Scanner' }} />
      <Stack.Screen name="SuccessPage" options={{ title: 'Success' }} />
      <Stack.Screen name="ErrorPage" options={{ title: 'Error' }} />
    </Stack>
  )
}