import styled from "@emotion/styled";
import { color, typography, space } from "styled-system";

import { TextProps } from "../assets/typing";

const Text = styled.span<TextProps>(color, typography, space);

export default Text;
