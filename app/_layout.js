import { View, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <StyledPressable className={`active:opacity-20`}>
                <InfoIcon />
              </StyledPressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
