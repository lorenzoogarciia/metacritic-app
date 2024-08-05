/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.lenght === 0 ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
