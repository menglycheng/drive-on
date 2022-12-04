import {
  Animated,
  Image,
  View,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const SplashScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const edges = useSafeAreaInsets();
  const startAnimation = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startAnimation, {
          toValue: height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 1.4,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          toValue: 1.45,
          useNativeDriver: true,
        }),
      ]).start();
      navigation.replace("OnboardingScreen");
    }, 1500);
  }, []);

  return (
    <Animated.View
      className="absolute top-0 bottom-0 left-0 right-0"
      style={{ transform: [{ translateY: 0 }] }}
    >
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          // transform: [{ scale: scaleLogo }],
        }}
      >
        <Animated.Image
          source={Logo}
          style={{
            height: 100,
            width: 100,
            transform: [{ scale: scaleLogo }],
          }}
        />
        <View className="mt-10"></View>
        <Animated.Text
          className="text-3xl my-2 font-bold"
          style={{ transform: [{ scale: scaleTitle }] }}
        >
          Drive-On
        </Animated.Text>
        <Animated.Text
          className="text-gray-500 "
          style={{ transform: [{ scale: scaleTitle }] }}
        >
          Make your life easier
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;
