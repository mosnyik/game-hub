import { useState } from "react";
import {
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./types/game-types";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" paddingX={5} justifyItems="start">
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Genre
          </Text>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        justifyItems={"start"}
      >
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
