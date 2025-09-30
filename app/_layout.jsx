import { Stack } from "expo-router";
import { GalleryProvider } from "../src/context/GalleryContext"; // 👈 import yahan karo

export default function RootLayout() {
  return (
    <GalleryProvider>   {/* 👈 Wrap poore Stack ko */}
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(gallery)" options={{ headerShown: false }} />
      </Stack>
    </GalleryProvider>
  );
}
