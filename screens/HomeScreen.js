import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import VehicleCard from "../components/homeScreen/VehicleCard";
import CheckupCard from "../components/homeScreen/CheckupCard";
import RecommandProductCard from "../components/homeScreen/RecommandProductCard";
// import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="mx-4 mt-10">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold ">Your Vehicle </Text>
        <VehicleCard />
        <Text className="text-2xl pt-6 font-bold ">Quick Checkup </Text>
        <CheckupCard />
        <Text className="text-2xl pt-6 font-bold ">Recommanded Product </Text>
        <RecommandProductCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;