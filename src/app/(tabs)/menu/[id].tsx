import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";


const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
        <Stack.Screen options={{title:"details :" +id }}/>
      <Text> id : {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
