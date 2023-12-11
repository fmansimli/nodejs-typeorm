import type { RequestHandler } from "express";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";

const categoryRepo = AppDataSource.getRepository(Category);

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const [categories, count] = await categoryRepo.findAndCount();
    res.status(200).json({ categories, count });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const create: RequestHandler = async (req, res, next) => {
  const { name, desc } = (req.body as Category) || {};
  try {
    const category = new Category({ name, desc });
    await categoryRepo.save(category);

    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const deleteAll: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
