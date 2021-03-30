import styled from "@emotion/styled";

import Box from "./Box";

const ComicBox = styled(Box)(({ theme }) => ({
  border: `0.4rem solid `,
  background: "#fff",
  transition: "all 0.2s",
  boxShadow: `-0.8rem 0.8rem ${theme.colors.primary}`,
}));

export default ComicBox;
