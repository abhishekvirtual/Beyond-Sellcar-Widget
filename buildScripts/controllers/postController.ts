import { NextFunction, Request, Response, Router } from 'express';
import { Post } from '../models/post';

export class PostController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async all(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const data = await Post.find();
      return res.status(200).json({ data, message: 'success' });
    } catch (error) {
      next(error);
    }
  }

  public async one(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { slug } = req.params;
    try {
      const data = await Post.findOne({ slug });
      if (!data) {
        throw new Error('Post not found');
      }
      return res.status(200).json({ data, message: 'success' });
    } catch (error) {
      return next(error.message);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
      title,
      slug,
      content,
      featuredImage,
      category,
      published,
    } = req.body;
    try {
      const post = await new Post({
        title,
        slug,
        content,
        featuredImage,
        category,
        published,
      });
      const data = await post.save();
      res.status(201).json({ data, message: 'success' });
    } catch (error) {
      return next(error.message);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { slug } = req.body;
    try {
      const data = await Post.findOneAndUpdate({ slug }, req.body);
      res.status(200).json({ data, message: 'success' });
    } catch (error) {
      return next(error.message);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { slug } = req.body;
    try {
      const data = await Post.findOneAndRemove({ slug });
      return res.status(204).json({ data, message: 'success' });
    } catch (error) {
      return next(error.message);
    }
  }

  public routes() {
    this.router.get('/', this.all);
    this.router.get('/:slug', this.one);
    this.router.post('/', this.create);
    this.router.put('/:slug', this.update);
    this.router.delete('/:slug', this.delete);
  }
}
