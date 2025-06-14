import { Image } from "expo-image";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IMsgItem } from "@/components/home/MsgItem";
import { hapticSoft } from "@/utils/hap";
import LoadingMsg from "./LoadingMsg";

interface IProps {
  item: IMsgItem;
}

export default function AgentMsg({ item }: IProps) {
  const { content, deepSearch, isLoading } = item;
  const colorScheme = useColorScheme();
  const [showDeepSearch, setShowDeepSearch] = useState(true);

  return (
    <View
      style={{
        flexDirection: "column",
        alignSelf: "flex-start",
        gap: 8,
      }}
    >
      {deepSearch && deepSearch.length > 0 && (
        <>
          <Pressable
            style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            onPress={() => {
              hapticSoft();
              setShowDeepSearch(!showDeepSearch);
            }}
          >
            <ThemedText>DeepSearch</ThemedText>
            <Image
              source={require("@/assets/images/down.svg")}
              style={{
                width: 24,
                height: 24,
                transform: [{ rotate: showDeepSearch ? "0deg" : "-90deg" }],
              }}
              tintColor={colorScheme === "light" ? "#333" : "#ddd"}
            />
          </Pressable>
          {showDeepSearch && (
            <Text
              style={{
                fontSize: 14,
                color: colorScheme === "light" ? "#333" : "#ddd",
              }}
            >
              {deepSearch}
            </Text>
          )}
        </>
      )}

      {content && (
        <ThemedView
          style={[
            styles.container,
            { backgroundColor: colorScheme === "light" ? "#eee" : "#222" },
          ]}
        >
          <ThemedText style={{ fontSize: 16 }}>{content}</ThemedText>
        </ThemedView>
      )}

      {isLoading && <LoadingMsg isLoading={isLoading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: "",
  },
});
