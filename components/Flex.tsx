import styled from "@emotion/styled";
import { flexbox } from "styled-system";

import Box from "./Box";
import { FlexProps } from "../assets/typing";

const Flex = styled(Box)<FlexProps>(
  {
    display: "flex",
  },
  flexbox
);

export default Flex;
