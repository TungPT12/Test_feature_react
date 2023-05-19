import React, { useContext } from "react";
import {
  VisibilityContext,
} from "react-horizontal-scrolling-menu";
function Btn() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
    return (
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </button>
    );
}

export default Btn;