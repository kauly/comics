import * as React from "react";
import { matchSorter } from "match-sorter";

import Grid from "./Grid";
import HeroCard from "./HeroCard";
import Box from "./Box";

import { useHeroList } from "../services/api";
import { StateCtx } from "../components/StateProvider";
import { setFavHeros } from "../services/state";
import { IHero } from "../assets/typing";
import { getFavHeros, setLocalFavHeros } from "../services/storage";

const sorter = (list: Array<IHero>, query: string) =>
  matchSorter(list, query, {
    keys: ["name"],
  });

const HeroList: React.FunctionComponent = () => {
  const { data, isError, isLoading } = useHeroList();
  const {
    state: { query, favHeros },
    dispatch,
  } = React.useContext(StateCtx);

  const filtered = React.useMemo(() => {
    if (!data) return [];
    const sort = sorter(data.list, query);
    return sort;
  }, [data, query]);

  React.useEffect(() => {
    const favIds = getFavHeros();
    dispatch(setFavHeros(favIds));

    return () => setLocalFavHeros(favHeros);
  }, []);

  return (
    <Box height="100%" overflowY="auto">
      <Grid
        gridTemplateColumns={["1fr", "repeat(3, 1fr)"]}
        gridTemplateRows="auto"
        gridGap={3}
        css={{
          placeItems: "center",
        }}
      >
        {filtered.map((hero) => (
          <HeroCard hero={hero} key={hero.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default HeroList;
