import styled from "@emotion/styled";
import { space, color, layout, position, background } from "styled-system";

import { BoxProps } from "../assets/typing";

const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    "&:focus": {
      outline: "none",
    },
  },
  space,
  color,
  layout,
  position,
  background
);

export default Box;
