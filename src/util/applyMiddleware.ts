import { Router } from "express";

type Wrapper = (router: Router) => void;

export default (
  middlewares: Wrapper[],
  router: Router,
) => {
  for (const middle of middlewares) {
    middle(router);
  }
};