import * as React from "react";

import Grid from "../components/Grid";
import Flex from "../components/Flex";
import SearchBar from "../components/SearchBar";
import HeroList from "../components/HeroList";
import OrderDialog from "../components/OrderDialog";

const Home = () => {
  const [searchRef, setSearchRef] = React.useState<HTMLDivElement>();

  const getRef = React.useCallback(
    (node: HTMLDivElement) => {
      if (!node || searchRef) return;
      setSearchRef(node);
    },
    [setSearchRef]
  );

  React.useEffect(() => {
    if (!searchRef) return;
    searchRef.focus();
  }, [searchRef]);

  return (
    <Grid gridTemplateRows="100px auto" width="100%" height="100%">
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SearchBar getRef={getRef} />
        <OrderDialog />
      </Flex>
      <HeroList />
    </Grid>
  );
};
export default Home;
