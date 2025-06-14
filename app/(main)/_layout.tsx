import { Platform, Pressable, StyleSheet, useColorScheme } from "react-native";

import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";

export default function Layout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Stack>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="music"
        options={{
          headerShown: true,
          // Ugly android
          presentation: "modal",
          headerTransparent: true,

          headerBackground: () => (
            <BlurView
              tint={colorScheme}
              intensity={50} // 默认值
              style={[
                StyleSheet.absoluteFill,
                Platform.OS === "android" && {
                  backgroundColor: colorScheme === "light" ? "#fff" : "#000",
                },
              ]} // 绝对定位
            />
          ),
          headerRight: () =>
            Platform.OS === "ios" && (
              <Pressable onPress={() => router.back()}>
                <Image
                  source={require("@/assets/images/close.svg")}
                  style={{ width: 24, height: 24 }}
                  tintColor={colorScheme === "light" ? "#333" : "#ddd"}
                />
              </Pressable>
            ),
          title: "Music",
          headerShadowVisible: true,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
