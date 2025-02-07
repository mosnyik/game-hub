import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={
        {
          base: "1fr",
          lg: "200px 1fr"
        }
      }
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" justifyItems={"center"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
