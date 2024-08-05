import { useEffect, useRef } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

export function GameCard({ game }) {
  const StyledPressable = styled(Pressable);
  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPressable className="active:opacity-30 active:border-white/50 border-black mb-2 bg-gray-900 rounded-xl p-4">
        <View className=" flex-row gap-4" key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink-0" style={styles.description}>
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 36,
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  description: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },
});
