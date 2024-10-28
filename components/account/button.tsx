import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import icons, { iconNames } from "./icons";

export default function Button({ text, icon }: { text: string; icon: string }) {
  const iconD = iconNames.includes(icon)
    ? icons[icon as "default"]
    : icons["default"];
  return (
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
      <Image source={{ uri: iconD }} width={50} height={50} />
      <Text>{text}</Text>
    </View>
  );
}
