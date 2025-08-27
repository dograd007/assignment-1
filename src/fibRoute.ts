// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;
  const n = parseInt(num);

  if (isNaN(n) || n < 0) {
    return res.send(`fibonacci(${num}) is undefined`);
  }

  const fibN = fibonacci(n);
  res.send(`fibonacci(${n}) is ${fibN}`);
};
