import { ReactElement } from "react";

import { useButtons } from "./customHooks";
import "./App.css";

function App(): ReactElement {
  const {
    likeActive,
    likesCount,
    dislikeActive,
    dislikesCount,
    dislikeHandler,
    likeHandler,
  } = useButtons();

  console.log({ likeActive, dislikeActive });
  return (
    <div className="container">
      <button
        className={likeActive ? "btn active" : "btn"}
        onClick={likeHandler}
      >
        Like | {likesCount}
      </button>
      <button
        className={dislikeActive ? "btn active" : "btn"}
        onClick={dislikeHandler}
      >
        Dislike | {dislikesCount}
      </button>
    </div>
  );
}

export default App;
