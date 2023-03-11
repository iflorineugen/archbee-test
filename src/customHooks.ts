import { useState } from "react";

import { INITIAL_LIKES, INITIAL_DISLIKES } from "./constants";
import { IUseButtons } from "./interfaces";

export function useButtons(): IUseButtons {
    const [likesCount, setLikesCount] = useState(INITIAL_LIKES);
    const [dislikesCount, setDislikesCount] = useState(INITIAL_DISLIKES);
  
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDisikeActive] = useState(false);
  
    function likeHandler() {
      if (likeActive) {
        setLikeActive(false);
        setLikesCount((prevLikesCount) => prevLikesCount - 1);
      } else {
        setLikeActive(true);
        setLikesCount((prevLikesCount) => prevLikesCount + 1);
        if (dislikeActive) {
          setDisikeActive(false);
          setDislikesCount((prevDislikesCount) => prevDislikesCount - 1);
        }
      }
    }
  
    function dislikeHandler() {
      if (dislikeActive) {
        setDisikeActive(false);
        setDislikesCount((prevDislikesCount) => prevDislikesCount - 1);
      } else {
        setDisikeActive(true);
        setDislikesCount((prevDislikesCount) => prevDislikesCount + 1);
        if (likeActive) {
          setLikeActive(false);
          setLikesCount((prevLikesCount) => prevLikesCount - 1);
        }
      }
    }
  
  return {
    likeActive,
    likesCount,
    dislikeActive,
    dislikesCount,
    dislikeHandler,
    likeHandler
  };
}