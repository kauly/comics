import * as React from "react";

import Box from "./Box";
import Flex from "./Flex";
import ComicBox from "./ComicBox";
import SearchIcon from "./SearchIcon";

import { StateCtx } from "./StateProvider";
import { useDebounce } from "../services/hooks";
import { setQuery } from "../services/state";

const SearchBar = ({ getRef }) => {
  const { dispatch } = React.useContext(StateCtx);
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 500);

  const _handleSearch = (ev) => setSearch(ev.target.value);

  React.useEffect(() => {
    dispatch(setQuery(debouncedSearch));
  }, [debouncedSearch]);

  return (
    <ComicBox width={["75%", "50%"]} padding="0.4rem 1.25rem">
      <Flex width="100%" alignItems="center">
        <input
          value={search}
          onChange={_handleSearch}
          ref={getRef}
          width="100%"
          height="100%"
          spellCheck={false}
          css={{
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderLeftStyle: "hidden",
            borderBottomStyle: "hidden",
            backgroundColor: "#fff",
            "&:focus": {
              outline: "none",
            },
          }}
        />
        <Box ml="auto" width={32} height={32}>
          <SearchIcon size={32} />
        </Box>
      </Flex>
    </ComicBox>
  );
};

export default SearchBar;
