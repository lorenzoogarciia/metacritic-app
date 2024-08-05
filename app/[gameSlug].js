import { Text, View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../components/Screen";
import { useState, useEffect } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";
import { ActivityIndicator, ScrollView, Image } from "react-native";

export default function Detail() {
  const { gameSlug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameSlug) {
      getGameDetails(gameSlug).then(setGameInfo);
    }
  }, [gameSlug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Detalles del juego",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <ScrollView>
            <View className="justify-center items-center">
              <Text className="text-white font-bold mt-1 mb-3 text-2xl text-center">
                {gameInfo.title}{" "}
              </Text>
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white mt-2 mb-3 text-lg text-center">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
