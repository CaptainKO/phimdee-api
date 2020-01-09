import { Router } from "express";

type Wrapper = (router: Router) => void;

export default (
  middleware: Wrapper[],
  router: Router,
) => {
  for (const middle of middleware) {
    middle(router);
  }
};