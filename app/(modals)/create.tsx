import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
function Create() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: "Create" }} />
      <View>
        <Text>MErhaba</Text>
      </View>
    </>
  );
}

export default Create;
