import * as React from "react";

import Box from "./Box";
import Grid from "./Grid";
import Flex from "./Flex";
import Text from "./Text";
import ComicBox from "./ComicBox";
import FavIcon from "./FavIcon";

import { IHeroCard } from "../assets/typing";
import { StateCtx } from "../components/StateProvider";
import { updateFavHeros, unsetFavHeros } from "../services/state";

const favStyle = {
  "& circle": {
    stroke: "blue",
    fill: "blue",
  },
  "& path": {
    stroke: "#fff",
    fill: "#fff",
  },
};

const isFav = (id: string, arr: string[]) => arr.includes(id);

const HeroCard: React.FunctionComponent<IHeroCard> = ({ hero }) => {
  const {
    state: { favHeros },
    dispatch,
  } = React.useContext(StateCtx);

  const _handleFav = () => {
    if (!favHeros.length) {
      return dispatch(updateFavHeros(hero.id));
    }
    dispatch(
      isFav(hero.id, favHeros)
        ? unsetFavHeros(hero.id)
        : updateFavHeros(hero.id)
    );
  };

  return (
    <ComicBox
      width={["90%", "400px"]}
      height={["120px", "200px"]}
      css={{
        cursor: "pointer",
        position: "relative",
      }}
    >
      <Grid gridTemplateColumns="repeat(2, 1fr)" width="100%" height="100%">
        <Box
          backgroundImage={`url(${hero.thumbnail})`}
          backgroundSize={["cover", "auto"]}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          overflowY="auto"
        >
          <Flex flex="1" justifyContent="center" alignItems="center">
            <Text
              fontWeight="large"
              textAlign="center"
              css={{
                overflowWrap: "break-word",
              }}
            >
              {hero.name}
            </Text>
          </Flex>
        </Flex>
      </Grid>
      <Box
        position="absolute"
        top="2px"
        right="2px"
        height={34}
        width={34}
        onClick={_handleFav}
        css={{
          ...(isFav(hero.id, favHeros) ? favStyle : {}),
          cursor: "pointer",
          "&:hover": {
            "& circle": {
              stroke: "blue",
              fill: "blue",
            },
            "& path": {
              stroke: "#fff",
              fill: "#fff",
            },
          },
        }}
      >
        <FavIcon />
      </Box>
    </ComicBox>
  );
};

export default HeroCard;
