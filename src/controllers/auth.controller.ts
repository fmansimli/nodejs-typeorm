import type { RequestHandler } from "express";
import { User } from "../entities";

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body as User;

  try {
    res.status(200).json({ email, password });
  } catch (error) {
    next(error);
  }
};

export const register: RequestHandler = async (req, res, next) => {
  const { email, password }: User = req.body;

  try {
    res.status(200).json({ email, password });
  } catch (error) {
    next(error);
  }
};
