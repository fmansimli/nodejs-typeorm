import type { RequestHandler } from "express";

export const getProfile: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const updateProfile: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const deleteProfile: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
