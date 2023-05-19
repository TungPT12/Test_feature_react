import "./App.css";

import React, { useContext } from "react";
import {
  ScrollMenu,
  VisibilityContext,
} from "react-horizontal-scrolling-menu";
//react-horizontal-scrolling-menu
import Btn from "./btn";


function App() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
      <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </button>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
    return (
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </button>
    );
  }

  return (
    <div className="name">
      <ScrollMenu scrollContainerClassName="hidden" noPolyfill={false} LeftArrow={LeftArrow} RightArrow={<Btn disabledBtn={isLastItemVisible} onclick={() => scrollNext()}/>}>
        <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d.jpg" />
        <img src="https://i.pinimg.com/600x315/57/7f/28/577f289f49129180bf6dc32857c91ff2.jpg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHoBuntQGYe2FszM9yxqdm3qBl3CIesyZhbCN6rJzeoB6k3aQd9hAHFR76H1ma3km8FY&usqp=CAU" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJrynlO-PSRi_Cn4dMkevR1w4_BoFGBrAD6_qutAxkKSqkcyZHllB7Aewnaj-KVx5F_w&usqp=CAU" />
        <img src="https://i.pinimg.com/originals/c9/52/2b/c9522bd1d2092717164ec51566083751.gif" />
        <img src="https://i.pinimg.com/474x/93/ec/33/93ec339031f3d1d5a636c89340fc532e.jpg" />
        <img src="https://topdev.vn/blog/wp-content/uploads/2020/10/server.jpg" />
        <img src="https://i.pinimg.com/474x/78/60/e4/7860e47607f6b1bd8d984674e35d6741.jpg" />
        <img src="https://habacanimation.files.wordpress.com/2011/09/truyen-thuyet-song-dai-duong-dd-habac-01.jpg?w=720" />
        <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d.jpg" />
        <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d.jpg" />
        <img src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d.jpg" />
      </ScrollMenu>
    </div>
  );
}

export default App;
