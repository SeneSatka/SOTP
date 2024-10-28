import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons, Feather } from "@expo/vector-icons";
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={focused ? "#057cff" : "#646464"}
              />
            ),

            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="export"
          options={{
            drawerIcon: ({ focused, size }) => (
              <Feather
                name="upload"
                size={size}
                color={focused ? "#057cff" : "#646464"}
              />
            ),
            drawerLabel: "Export",
            title: "Export",
          }}
        />
        <Drawer.Screen
          name="import"
          options={{
            drawerIcon: ({ focused, size }) => (
              <Feather
                name="download"
                size={size}
                color={focused ? "#057cff" : "#646464"}
              />
            ),
            drawerLabel: "Import",
            title: "Import",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
