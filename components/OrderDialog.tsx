import * as React from "react";

import OrderIcon from "../components/OrderIcon";
import ComicBox from "../components/ComicBox";
import { StateCtx } from "./StateProvider";
import { setToggleOrder } from "../services/state";

const OrderDialog = () => {
  const {
    state: { orderState },
    dispatch,
  } = React.useContext(StateCtx);

  const _handleToggle = () => dispatch(setToggleOrder());

  return (
    <ComicBox
      height={[32, 48]}
      width={[32, 48]}
      bg="#fff"
      ml={2}
      css={{
        padding: "2px",
        cursor: "pointer",
        "& svg": {
          transform: "rotate(180deg)",
        },
        "&:hover": {
          transform: "rotate(-35deg)",
        },
      }}
      onClick={_handleToggle}
    >
      <OrderIcon />
    </ComicBox>
  );
};

export default OrderDialog;
