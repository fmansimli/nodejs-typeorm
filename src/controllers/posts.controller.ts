import type { RequestHandler } from "express";
import { AppDataSource } from "../data-source";
import { NotFoundError } from "../errors";

import { Post, Category } from "../entities";
import { CreatePostDto } from "../validations/create-post.dto";

const repo = AppDataSource.getRepository(Post);

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const [posts, count] = await repo.findAndCount({
      relations: { categories: true }
    });

    res.status(200).json({ posts, meta: { count } });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const id = +req.params.id;

    const post = await repo.findOne({
      where: { id },
      relations: { user: true }
    });

    if (!post) {
      throw new NotFoundError("post not found.");
    }

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};

export const create: RequestHandler = async (req, res, next) => {
  const { body, title, categories } = req.body as CreatePostDto;
  try {
    const ctgs = categories.map((c) => new Category({ id: c }));

    const post = new Post({ body, title, categories: ctgs });
    await repo.save(post);

    res.status(201).json(post);
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
