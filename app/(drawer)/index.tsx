import Button from "@/components/account/button";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const test = () => {
    router.push("/(modals)/create");
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        justifyContent: "center",
        gap: 3,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#000",
          borderRadius: 10,
          borderWidth: 2,
        }}
      >
        <Ionicons name="add-outline" size={30} onPress={test} />
      </View>
      <Button text="Google" icon="google" />
      <Button text="Discord" icon="discord" />
    </View>
  );
}
