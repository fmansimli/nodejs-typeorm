import type { RequestHandler } from "express";
import { AppDataSource } from "../data-source";
import { Post } from "../entities";
import { NotFoundError } from "../errors";

const repo = AppDataSource.getRepository(Post);

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const [posts, count] = await repo.findAndCount();

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
  const { body, title } = req.body as Post;
  try {
    const post = new Post({ body, title });
    await repo.save(post);

    res.status(201).json({ created: post });
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
